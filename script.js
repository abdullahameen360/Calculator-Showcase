function calculate(expression) {
  // Remove spaces
  expression = expression.trim();
  
  // Validate: only allow numbers, operators, decimals, parentheses
  if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
    return "Error";
  }

  // Tokenize the expression
  const tokens = expression.match(/(\d+\.?\d*|\.\d+|[+\-*/()])/g);
  if (!tokens) return "Error";

  let pos = 0;

  function peek() { return tokens[pos]; }
  function consume() { return tokens[pos++]; }

  function parseNumber() {
    const token = consume();
    if (token === undefined) return NaN;
    return parseFloat(token);
  }

  function parseFactor() {
    if (peek() === '(') {
      consume(); // '('
      const val = parseExpression();
      if (peek() === ')') consume(); // ')'
      return val;
    }
    // Handle unary minus
    if (peek() === '-') {
      consume();
      return -parseFactor();
    }
    return parseNumber();
  }

  function parseTerm() {
    let left = parseFactor();
    while (peek() === '*' || peek() === '/') {
      const op = consume();
      const right = parseFactor();
      if (op === '*') left *= right;
      if (op === '/') {
        if (right === 0) return "Error: Divide by 0";
        left /= right;
      }
    }
    return left;
  }

  function parseExpression() {
    let left = parseTerm();
    while (peek() === '+' || peek() === '-') {
      const op = consume();
      const right = parseTerm();
      if (op === '+') left += right;
      if (op === '-') left -= right;
    }
    return left;
  }

  const result = parseExpression();

  // Check if we consumed all tokens
  if (pos !== tokens.length) return "Error";
  if (typeof result === 'string') return result; // div by 0 message
  if (!isFinite(result)) return "Error";

  return result;
}