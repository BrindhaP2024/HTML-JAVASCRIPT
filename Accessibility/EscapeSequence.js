const exampleString =
    "This is an example string with different escape sequences:\n" +
    "1. NUL character (\\0): " + "\0" + "\n" + // NUL character
    "2. Backspace (\\b): " + "Hello\bWorld" + "\n" + // Backspace
    "3. Horizontal tab (\\t): " + "Column1\tColumn2" + "\n" + // Horizontal tab
    "4. Newline (\\n): First line\nSecond line" + "\n" + // Newline
    "5. Vertical tab (\\v): Line1\vLine2" + "\n" + // Vertical tab
    "6. Form feed (\\f): Page1\fPage2" + "\n" + // Form feed
    "7. Carriage return (\\r): Hello\rWorld" + "\n" + // Carriage return
    "8. Double quote (\\\"): He said, \"Hello!\"" + "\n" + // Double quote
    "9. Apostrophe (\\\'): It\'s a great day!" + "\n" + // Apostrophe
    "10. Backslash (\\\\): Path\\to\\file" + "\n" + // Backslash

console.log(exampleString);
