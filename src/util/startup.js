import compression from "compression"

export const shouldCompress = (req, res) => {
  // Stop compression if x-no-compression request header is present
  if (req.headers['x-no-compression']) {
    return false
  }

  // Fallback to standard compression
  return compression.filter(req, res)
}