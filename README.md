# REST API Automation Framework

## Overview
This project is an automated testing framework for REST APIs using Playwright. It demonstrates how to perform API testing with modern testing practices and provides examples of common API testing scenarios.

## Features
- REST API automation using Playwright
- Data-driven testing capabilities
- Comprehensive test reporting
- Support for multiple environments
- Request/Response validation
- Status code verification
- JSON schema validation

## Prerequisites
- Node.js (v14 or higher)
- Playwright
- Git

## Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd Rest_Api_Demo
```

2. Install dependencies:
```bash
npm install
```

## Project Structure
```
Rest_Api_Demo/
├── tests/                 # Test files
├── fixtures/             # Test data
├── helpers/             # Helper functions and utilities
├── config/              # Configuration files
└── reports/             # Test reports
```

## Running Tests
To run all tests:
```bash
npx playwright test
```

To run only the test file:
```bash
npx playwright test tests/restfull_api.spec.js
```

To run tests in debug mode:
```bash
npx playwright test --debug
```

To view the test report:
```bash
npx playwright show-report
```

## Configuration
- Environment variables can be configured in the `.env` file
- Test configuration can be modified in `playwright.config.ts`

## Best Practices
- Keep tests independent and atomic
- Use meaningful test descriptions
- Follow the AAA (Arrange-Act-Assert) pattern
- Implement proper error handling
- Use appropriate assertions for validation

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details

## Contact
Your Name - peiris.pck@gmail.com
Project Link: https://github.com/chanukapeiriz/Restful_Api_Demo
