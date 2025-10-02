# 🤝 Contributing to FOSS Hub

First off, thank you for considering contributing to FOSS Hub! It's people like you that make FOSS Hub such a great tool for the open source community. 🎉

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [What We're Looking For](#what-were-looking-for)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Adding New Tools](#adding-new-tools)
  - [Improving Documentation](#improving-documentation)
  - [Code Contributions](#code-contributions)
- [Development Process](#development-process)
- [Style Guides](#style-guides)
  - [Git Commit Messages](#git-commit-messages)
  - [JavaScript Style Guide](#javascript-style-guide)
  - [CSS/Tailwind Style Guide](#csstailwind-style-guide)
- [Pull Request Process](#pull-request-process)
- [Community](#community)
- [Recognition](#recognition)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [maintainer@email.com].

## What We're Looking For

We're looking for contributions in the following areas:

### 🎯 High Priority
- **New FOSS Tools**: Adding quality open source tools to our directory
- **Bug Fixes**: Fixing issues in the current implementation
- **Performance Improvements**: Making the site faster and more efficient
- **Accessibility**: Improving WCAG compliance and keyboard navigation
- **Mobile Experience**: Enhancing responsive design and touch interactions

### 💡 Medium Priority
- **Feature Enhancements**: Adding new features like filtering options, comparison tools
- **UI/UX Improvements**: Refining the design and user experience
- **Documentation**: Improving guides, README, and inline code documentation
- **Testing**: Adding unit tests, integration tests, and E2E tests
- **Internationalization**: Adding support for multiple languages

### 🔮 Future Considerations
- **API Development**: Building REST/GraphQL APIs
- **Backend Features**: User accounts, ratings, reviews
- **DevOps**: CI/CD pipeline improvements
- **Analytics**: Privacy-respecting analytics implementation

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues as you might find that you don't need to create one. When you are creating a bug report, please include as many details as possible.

#### How to Submit A Good Bug Report

Bugs are tracked as [GitHub issues](https://github.com/yourusername/foss-hub/issues). Create an issue and provide the following information:

```markdown
**Bug Description**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected Behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
- OS: [e.g. Windows 10, macOS 12, Ubuntu 22.04]
- Browser: [e.g. Chrome 120, Firefox 121, Safari 17]
- Device: [e.g. Desktop, iPhone 14, Samsung Galaxy S23]
- Node Version: [e.g. 18.17.0]

**Additional Context**
Add any other context about the problem here.
```

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as [GitHub issues](https://github.com/yourusername/foss-hub/issues). When creating an enhancement suggestion, please include:

```markdown
**Feature Description**
A clear and concise description of what you want to happen.

**Use Case**
Explain why this enhancement would be useful to most FOSS Hub users.

**Possible Implementation**
Describe alternatives you've considered or how you think it could be implemented.

**Additional Context**
Add any mockups, examples, or reference implementations.
```

### 🔧 Adding New Tools

We love expanding our directory with quality FOSS tools! Here's how to add a new tool:

#### Prerequisites for Tool Submission

- [ ] Tool must be genuinely open source (OSI-approved license)
- [ ] Active development (commits within last 6 months)
- [ ] Stable release available (not alpha/beta only)
- [ ] Clear documentation
- [ ] No malicious code or privacy concerns
- [ ] Provides real value to users

#### How to Add a Tool

1. **Fork the repository** and create a new branch:
   ```bash
   git checkout -b add-tool-toolname
   ```

2. **Edit the tools data file** at `src/data/tools.js`:
   ```javascript
   {
     id: 'unique-tool-id', // lowercase, hyphenated
     name: 'Tool Name',
     description: 'Concise description (max 160 chars) explaining what the tool does',
     longDescription: 'Detailed description with key features and use cases',
     category: 'Development', // Must match existing categories
     subcategory: 'IDE', // Optional
     url: 'https://official-website.com',
     github: 'https://github.com/org/repo',
     gitlab: 'https://gitlab.com/org/repo', // If applicable
     docs: 'https://docs-website.com',
     tags: ['editor', 'code', 'development'],
     logo: '/images/tools/tool-logo.svg', // SVG preferred
     screenshots: [
       '/images/tools/tool-screenshot-1.png',
       '/images/tools/tool-screenshot-2.png'
     ],
     platforms: ['Windows', 'macOS', 'Linux', 'Web'],
     license: 'MIT',
     lastUpdate: '2024-01-15',
     version: '3.2.1',
     alternatives: ['alternative-tool-id-1', 'alternative-tool-id-2'],
     featured: false, // Set to true only for exceptional tools
     stats: {
       stars: 45000,
       forks: 3200,
       contributors: 580
     }
   }
   ```

3. **Add tool assets**:
   - Logo: Add to `/public/images/tools/` (SVG preferred, PNG fallback)
   - Screenshots: Add to `/public/images/tools/` (optimize for web, max 500KB each)
   - Ensure images are properly licensed or use official assets

4. **Test your addition**:
   ```bash
   npm run dev
   # Verify the tool appears correctly
   # Check all links work
   # Ensure filtering works
   ```

5. **Submit a Pull Request** with:
   - Clear PR title: `Add [Tool Name] to directory`
   - Description including why this tool should be added
   - Link to the tool's official website and repository
   - Confirmation that you've tested the addition

### 📚 Improving Documentation

Documentation improvements are always welcome! This includes:

- Fixing typos and grammar
- Clarifying existing documentation
- Adding missing documentation
- Translating documentation
- Adding code examples
- Creating tutorials or guides

### 💻 Code Contributions

For code contributions:

1. **Find an issue** to work on or create a new one
2. **Comment** on the issue to let others know you're working on it
3. **Fork** the repository
4. **Create a branch** from `main`
5. **Make your changes**
6. **Test** your changes thoroughly
7. **Submit a pull request**

## Development Process

### 🚀 Getting Started

1. **Fork and clone** the repository:
   ```bash
   git clone https://github.com/your-username/foss-hub.git
   cd foss-hub
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create a branch**:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-number
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Make your changes** and test them

6. **Run quality checks**:
   ```bash
   npm run lint        # Check code style
   npm run format      # Format code
   npm run test        # Run tests
   npm run build       # Ensure production build works
   ```

### 🧪 Testing

Before submitting your PR, ensure:

- [ ] All existing tests pass
- [ ] New features include tests
- [ ] Manual testing completed
- [ ] Cross-browser testing done
- [ ] Iclude screenshots of changes that you made

## Style Guides

### Git Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

#### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks
- **build**: Build system changes
- **ci**: CI/CD changes

#### Examples
```bash
feat(tools): add filtering by license type
fix(search): resolve case-sensitive search issue
docs(readme): update installation instructions
style(components): format with prettier
perf(images): optimize tool logos for web
```

### JavaScript Style Guide

We use ESLint with the following key rules:

```javascript
// ✅ Good
const toolName = 'Visual Studio Code';
const tools = [...existingTools, newTool];

function getToolById(id) {
  return tools.find(tool => tool.id === id);
}

// Component naming (React)
const ToolCard = ({ tool }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="tool-card">
      {/* Content */}
    </div>
  );
};

// ❌ Bad
var tool_name = "Visual Studio Code"
let Tools = existingTools.concat([newTool])

function get_tool_by_id(id){
  for(let i=0;i<tools.length;i++){
    if(tools[i].id==id) return tools[i]
  }
}
```

### CSS/Tailwind Style Guide

```css
/* Use Tailwind utilities first */
<div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">

/* Custom CSS when necessary */
.tool-card {
  /* Use CSS variables for consistency */
  background: var(--card-background);
  border: 1px solid var(--border-color);
  
  /* Mobile-first approach */
  padding: 1rem;
  
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
}

/* Naming conventions */
.component-name { }        /* Component */
.component-name__element { } /* Element */
.component-name--modifier { } /* Modifier */
```

## Pull Request Process

### 📝 PR Checklist

Before submitting a PR, ensure:

- [ ] Code follows the style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated if needed
- [ ] Tests added/updated
- [ ] All tests passing
- [ ] No console errors or warnings
- [ ] Responsive design maintained
- [ ] Accessibility standards met
- [ ] No merge conflicts with main branch

### 🔄 PR Review Process

1. **Automated checks** will run on your PR (linting, tests, build)
2. **Code review** by maintainers (usually within 48-72 hours)
3. **Address feedback** if changes requested
4. **Approval** from at least one maintainer
5. **Merge** once all checks pass and approved

### 📋 PR Template

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Related Issue
Fixes #(issue number)

## Changes Made
- Change 1
- Change 2
- Change 3

## Screenshots (if applicable)
[Add screenshots for UI changes]

## Testing
- [ ] Tested locally
- [ ] Added/updated tests
- [ ] Cross-browser tested
- [ ] Mobile tested

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No warnings/errors
- [ ] Maintained accessibility
```

## Community

### 💬 Communication Channels

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For general discussions
- **Discord**: [Join our server](https://discord.gg/your-invite)
- **Twitter**: [@fosshub](https://twitter.com/fosshub)
- **Email**: maintainer@email.com

### 🌍 Translations

We welcome translations! To contribute:

1. Check if your language already has an open issue
2. If not, create an issue titled `Translation: [Language Name]`
3. Fork the repo and create translation files
4. Submit a PR with your translations

## Recognition

### 🏆 Contributors

All contributors are recognized in our:
- [Contributors page](https://github.com/yourusername/foss-hub/graphs/contributors)
- README acknowledgments
- Website credits page
- Annual contributor spotlight (for significant contributions)

### 🎖️ Contribution Levels

- **🥉 Bronze Contributor**: 1-2 merged PRs
- **🥈 Silver Contributor**: 3-9 merged PRs
- **🥇 Gold Contributor**: 10-24 merged PRs
- **💎 Diamond Contributor**: 25+ merged PRs
- **🌟 Core Contributor**: Ongoing significant contributions
