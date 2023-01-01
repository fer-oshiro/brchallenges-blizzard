export default function IfNull<T>(
  value: T | null | undefined,
  defaultValue: T,
  fallback: T
): T {
  if (value === null || value === undefined) return fallback
  return defaultValue
}
