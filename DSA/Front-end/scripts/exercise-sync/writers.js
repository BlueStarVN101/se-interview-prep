export function buildIndex(spec) {
  const doc = spec.jsdoc.map((l) => ` * ${l}`).join('\n');
  const throwLine = "  throw 'Not implemented';";

  if (spec.kind === 'hook') {
    return `/**\n${doc}\n */\nexport default function ${spec.exportName}(${spec.params}) {\n${throwLine}\n}\n`;
  }

  if (spec.kind === 'class') {
    const methods = spec.methods ?? [
      { name: 'push', params: 'value' },
      { name: 'pop', params: '' },
    ];
    const methodBodies = methods
      .map((m) => `  ${m.name}(${m.params}) {\n${throwLine}\n  }`)
      .join('\n\n');
    return `/**\n${doc}\n */\nexport class ${spec.className} {\n  constructor() {\n    /** Instance ready; methods throw until implemented. */\n  }\n\n${methodBodies}\n}\n`;
  }

  if (spec.kind === 'ui') {
    return `import { createElement } from 'react';\n\n/**\n${doc}\n */\nexport default function ${spec.exportName}(${spec.params}) {\n${throwLine}\n}\n`;
  }

  return `/**\n${doc}\n */\nexport function ${spec.exportName}(${spec.params}) {\n${throwLine}\n}\n`;
}

export function buildTests(spec) {
  const lines = [];
  const needsVi =
    spec.kind === 'ui' &&
    JSON.stringify(spec.suites).includes('vi.');

  if (spec.kind === 'ui') {
    lines.push(
      "import { describe, it, expect" + (needsVi ? ', vi' : '') + " } from 'vitest';",
      "import { createElement } from 'react';",
      "import { render, screen } from '@testing-library/react';",
      "import userEvent from '@testing-library/user-event';",
      "import '@testing-library/jest-dom/vitest';",
      `import ${spec.exportName} from './index.js';`,
      '',
    );
    if (spec.fixtureDecl) {
      lines.push(spec.fixtureDecl, '');
    }
  } else if (spec.kind === 'hook') {
    lines.push(
      "import { describe, it, expect } from 'vitest';",
      "import { renderHook, act } from '@testing-library/react';",
      `import ${spec.exportName} from './index.js';`,
      '',
    );
  } else if (spec.kind === 'class') {
    lines.push(
      "import { describe, it, expect } from 'vitest';",
      `import { ${spec.className} } from './index.js';`,
      '',
    );
  } else {
    lines.push(
      "import { describe, it, expect, vi } from 'vitest';",
      `import { ${spec.exportName} } from './index.js';`,
      '',
    );
  }

  lines.push(`describe('${spec.describeTitle ?? spec.exportName}', () => {`);

  for (const suite of spec.suites) {
    lines.push(`  describe('${suite.name}', () => {`);
    for (const test of suite.tests) {
      if (test.setup) lines.push(`    ${test.setup}`);
      lines.push(`    it('${test.name}', ${test.async ? 'async ' : ''}() => {`);
      for (const line of test.body) {
        lines.push(`      ${line}`);
      }
      lines.push('    });');
    }
    lines.push('  });');
    lines.push('');
  }

  lines.push('});');
  lines.push('');
  return lines.join('\n');
}
