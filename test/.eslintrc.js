module.exports = {
  'plugins': [
    'mocha'
  ],
  'overrides': [
    {
      'files': ['**/*.js'],
      'rules': {
        'no-undef': 'off',
        'mocha/no-exclusive-tests': 'warn',
        'mocha/no-mocha-arrows': 'error',
        'mocha/no-sibling-hooks': 'warn',
        'mocha/no-identical-title': 'warn',
        'mocha/max-top-level-suites': ['warn', {limit: 2}]
      }
    }
  ]
}
