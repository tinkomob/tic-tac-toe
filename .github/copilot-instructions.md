# Tic-Tac-Toe Web Application
A Vue.js-based tic-tac-toe game with Russian language interface that runs entirely in the browser. The application features player vs player and player vs computer modes with configurable grid sizes.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Quick Start - Serving the Application
- `cd /home/runner/work/tic-tac-toe/tic-tac-toe`
- `python3 -m http.server 8000` -- starts in <1 second. Server runs immediately.
- Navigate to `http://localhost:8000` in browser
- **CRITICAL**: Application requires internet access to CDN resources (Vue.js, Bootstrap, Google Fonts)

### Alternative Serving Methods
If Python HTTP server fails, use these alternatives:
- Node.js serve: `npx serve -s . -p 8000` -- takes 5-10 seconds to install dependencies on first run
- PHP built-in server (if available): `php -S localhost:8000`

### External Dependencies (CDN Required)
**CRITICAL**: The application loads these external resources and will NOT function without internet access:
- Vue.js 2.0.1 from cdnjs.cloudflare.com (REQUIRED - app won't work without this)
- Bootstrap 3.3.7 CSS from cdnjs.cloudflare.com
- Animate.css 3.5.2 from cdnjs.cloudflare.com
- Prefixfree.js 1.0.7 from cdnjs.cloudflare.com
- Oswald font from fonts.googleapis.com

**If CDN resources are blocked**: Application will show Vue.js template syntax like `{{turn}}` instead of actual values. This indicates Vue.js failed to load.

### No Build Process Required
- This is a static HTML/CSS/JS application - NO build step needed
- Simply serve the files with any HTTP server
- **NEVER run npm install, npm run build, or any build commands** - they are not needed and will fail

## Validation

### Manual Testing Scenarios
Always test these complete user workflows after making changes:

1. **Player vs Computer Game**:
   - Start server: `python3 -m http.server 8000`
   - Open `http://localhost:8000`
   - Click "[противкомпьютера]" (against computer)
   - Select marker (X or O) in the modal
   - Play several moves on the 3x3 grid
   - Verify computer makes moves automatically
   - Verify win/draw detection works
   - Click "сыграть снова?" (play again) to restart

2. **Player vs Player Game**:
   - Click "[противигрока]" (against player)  
   - Enter player names in the modal
   - Click "НАЧАТЬ ИГРУ" (start game)
   - Alternate clicks between players
   - Verify win/draw detection and restart functionality

3. **Grid Size Configuration**:
   - Change "РАЗМЕР ПОЛЯ" (field size) input to 4 or 5
   - Start any game mode
   - Verify larger grid displays and functions correctly

### Expected Behavior (When CDN Access Available)
- Game interface displays in Russian language with proper styling
- Grid squares highlight green when forming winning line
- Modal dialogs appear for game mode selection with proper styling
- Computer AI responds within 300ms delay
- Winner announcement appears after game completion
- Oswald font loads for typography
- Smooth animations during game interactions

### Expected Behavior (When CDN Access Blocked)
- HTML structure loads but shows Vue.js template syntax: `{{turn}}`, `{{game.winner}}`
- Styling appears broken without Bootstrap CSS
- JavaScript errors in browser console: "Vue is not defined"
- No game interactivity - clicking does nothing
- Basic HTML fallback layout visible

### Troubleshooting
- **If page shows Vue.js template syntax ({{...}})**: CDN resources failed to load. Check:
  - Network connectivity to cdnjs.cloudflare.com
  - Firewall or content blocker settings
  - Browser developer console for specific error messages
- **Server won't start on port 8000**: Try alternative ports: `python3 -m http.server 3000`
- **Blank page**: Check browser console for JavaScript errors
- **Layout broken**: Google Fonts (Oswald) may be blocked, affects typography only

### CDN Dependency Validation
Test CDN access before troubleshooting application issues:
```bash
curl -I https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.1/vue.min.js
# Should return HTTP 200, if not, CDN access is blocked
```

## Validation Commands
Run these to ensure application works before committing changes:

### Server and Basic Functionality
```bash
# Test local server startup (should complete in <1 second)
python3 -m http.server 8000 &
sleep 2

# Test server response (should return HTTP 200)
curl -s -o /dev/null -w "HTTP Status: %{http_code}\nResponse Time: %{time_total}s\n" http://localhost:8000

# Test CDN connectivity (if this fails, application won't work)
curl -I https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.1/vue.min.js

# Stop server
pkill -f "python3 -m http.server"
```

### Content Validation
```bash
# Verify main files exist
ls index.html css/style.css js/script.js js/board.js

# Check for Vue.js dependency in HTML
grep -n "vue" index.html

# Verify JavaScript syntax (no immediate errors)
node -c js/script.js
node -c js/board.js
```

### Manual Browser Testing Checklist
- [ ] Navigate to http://localhost:8000
- [ ] Verify no `{{...}}` syntax visible (indicates Vue.js loaded)
- [ ] Click "[противкомпьютера]" - modal should appear
- [ ] Select X or O marker - game board should appear
- [ ] Make moves on grid - computer should respond
- [ ] Complete a game - winner message should appear
- [ ] Test "[противигрока]" mode similarly
- [ ] Test different grid sizes via "РАЗМЕР ПОЛЯ" input

## Timing Expectations
- **Server startup**: <1 second - NEVER CANCEL
- **Page load**: 2-5 seconds (depending on CDN response time)  
- **Game initialization**: Immediate once page loads
- **Computer move delay**: 300ms by design

## Common Tasks

## Complete Repository Reference

### Full Directory Structure
```
tic-tac-toe/
├── .git/                   # Git repository data
├── .github/                # GitHub configuration  
│   └── copilot-instructions.md  # This file
├── README.md               # Basic project info with screenshots
├── index.html              # Main application file (3719 bytes)
├── css/
│   └── style.css           # Application styles with Oswald font
├── js/
│   ├── script.js           # Main Vue.js app logic (246 lines)
│   └── board.js            # Dynamic board generation (54 lines) 
└── git_img/                # Screenshots for README
    ├── ttt1.png
    ├── ttt2.png
    └── ttt3.png
```

### Key Statistics
- **Total JavaScript**: ~300 lines of code
- **No dependencies** in repository (all CDN-based)
- **No configuration files**: package.json, webpack, etc.
- **Static assets only**: HTML, CSS, JS, images
- **Repository size**: <1MB total

### Git Workflow  
```bash
# Standard development workflow
git status                  # Check current changes
git add .                   # Stage all changes
git commit -m "Description" # Commit with message
git push                    # Push to remote repository
```

### Key Files to Understand
- `index.html` - Contains Vue.js templates and the main HTML structure
- `js/script.js` - Vue.js component with game logic, AI, and state management
- `js/board.js` - Dynamic game board generation for different grid sizes
- `css/style.css` - Responsive styling with Oswald font integration

### Frequently Modified Files
When making changes, you'll most likely edit:
- `js/script.js` - Game logic, AI behavior, win conditions
- `css/style.css` - Visual styling and responsive design  
- `index.html` - UI layout and Vue.js template structure

## Common Development Workflows

### Making Code Changes
1. **Start development server**: `python3 -m http.server 8000`
2. **Edit files** using your preferred editor
3. **Refresh browser** to see changes (no build step required)
4. **Test functionality** using validation scenarios
5. **Stop server**: `pkill -f "python3 -m http.server"` or Ctrl+C

### Debugging JavaScript Issues  
1. **Open browser developer tools** (F12)
2. **Check Console tab** for errors
3. **Sources tab** for debugging breakpoints in js/script.js
4. **Network tab** to verify CDN resource loading

### Testing Changes Thoroughly
After modifying any JavaScript or CSS:
1. **Clear browser cache** (Ctrl+F5) to ensure new code loads
2. **Test all game modes**: PvP and PvC
3. **Test different grid sizes**: 3x3, 4x4, 5x5
4. **Verify win conditions**: horizontal, vertical, diagonal
5. **Test edge cases**: rapid clicking, grid size limits

### Performance Considerations
- **Static files only** - no server-side processing needed
- **CDN dependencies** may affect loading time in slow networks
- **Game logic runs locally** - no network calls during gameplay
- **Responsive design** - works on desktop and mobile browsers

### Code Patterns and Architecture
- **Vue.js 2.0 syntax** used throughout with Options API
- **Russian language strings** for UI text throughout
- **Computed properties** for reactive game state calculations
- **Event handlers** on DOM elements for user interactions  
- **CSS table-based layout** for game board (not CSS Grid)
- **No build pipeline** - direct browser execution of ES5 JavaScript

### Game AI Behavior (in js/script.js)
The computer opponent follows this priority order:
1. **Win move**: If AI can win in one move, take it
2. **Block move**: If player can win in one move, block it  
3. **Random move**: Otherwise, pick random available square
4. **300ms delay**: Artificial delay before computer moves for UX

### Game State Management
- **Board state**: 2D array with `{val: '', bg: ''}` objects
- **Win detection**: Computed property checks all possible win combinations
- **Turn management**: Alternates between 'X' and 'O' automatically
- **Grid generation**: Dynamic based on `GRID_SIZE` variable

## CRITICAL Notes
- **NEVER CANCEL** any server commands - they complete immediately
- Application requires internet access - will not work offline
- No package.json or build configuration needed
- Static file serving only - no server-side processing
- All game logic runs in browser JavaScript
- Responsive design works on desktop and mobile browsers

## Languages and Interface
- **User Interface**: Russian language
- **Code Comments**: Minimal, mostly in English where present
- **Game Text**: "противигрока" = against player, "противкомпьютера" = against computer
- **Win Text**: "побеждает" = wins, "ничья" = draw, "сыграть снова" = play again