const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

// Function to execute shell commands
function exec(command) {
  console.log(`Executing: ${command}`);
  try {
    const output = execSync(command, { encoding: 'utf-8' });
    console.log(output);
    return output;
  } catch (error) {
    console.error(`Error executing: ${command}`);
    console.error(error.stdout || error.stderr);
    throw error;
  }
}

async function deploy() {
  try {
    // Build the project
    console.log('Building the project...');
    exec('npm run build');
    
    // Create deployment directory
    const deployDir = path.join(__dirname, 'gh-pages-temp');
    console.log(`Creating deployment directory: ${deployDir}`);
    await fs.remove(deployDir);
    await fs.ensureDir(deployDir);
    
    // Copy build files to deployment directory
    console.log('Copying build files...');
    await fs.copy(path.join(__dirname, 'build'), deployDir);
    
    // Initialize git repo in deployment directory
    console.log('Initializing git repository...');
    process.chdir(deployDir);
    exec('git init');
    exec('git add .');
    exec('git commit -m "Deploy to GitHub Pages"');
    exec('git branch -M gh-pages');
    
    // Add remote and push
    console.log('Pushing to GitHub...');
    exec('git remote add origin https://github.com/Nimeshis/brsnepha.git');
    exec('git push -u origin gh-pages --force');
    
    // Clean up
    console.log('Cleaning up...');
    process.chdir(__dirname);
    await fs.remove(deployDir);
    
    console.log('Deployment successful!');
  } catch (error) {
    console.error('Deployment failed:', error.message);
    process.exit(1);
  }
}

deploy();