module.exports = {
      rootDir: ".",
      roots: ["./src"],
      moduleNameMapper: {
            '@root/(.*)': '<rootDir>/$1',
            '@nested/(.*)': '<rootDir>/src/nested/$1',
      },
      moduleDirectories: ["node_modules", "src"],
}