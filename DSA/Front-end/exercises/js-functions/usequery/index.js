/**
 * @template T
 * @param {() => Promise<T>} fn
 * @param {import("react").DependencyList} deps
 * @returns {{ data: T | null, error: Error | null, isLoading: boolean, refetch: () => void }}
 */
export default function useQuery(fn, deps = []) {
  throw 'Not implemented';
}
