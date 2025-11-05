# 🪶 Quick Git Cheat Sheet

A simple guide for day-to-day Git commands in your project.  
Use these inside Cursor’s terminal to manage your workflow.

---

## 🔍 Check your current project state
```bash
git status
```
Shows which files are changed, untracked, or staged.

---

## ➕ Add changes
```bash
git add .
```
Stages **all** changes (new, modified, or deleted files) for the next commit.

---

## 💾 Save a new version (commit)
```bash
git commit -m "Describe your change"
```
Saves a snapshot of your current project.  
Use short, clear messages like:
- `git commit -m "Fix typo in RSVP form"`
- `git commit -m "Add hero section animation"`

---

## 🚀 Push to GitHub (and trigger redeploy on Vercel)
```bash
git push
```
Uploads your local commits to your GitHub repository.  
Vercel automatically detects this and redeploys your live site.

---

## 🔄 Pull the latest changes from GitHub
```bash
git pull
```
Brings down the newest commits from your GitHub repository.  
Run this before you start editing if others are contributing too.

---

## 🌿 Create a new branch
```bash
git checkout -b feature-name
```
Creates and switches to a new branch.  
Example:
```bash
git checkout -b update-animations
```

---

## 🔁 Switch between branches
```bash
git checkout main
```
Goes back to the main branch.

---

## 🔀 Merge a finished branch into main
```bash
git merge feature-name
```
Brings your completed work from a feature branch into the main project.

---

## 💡 Pro Tips

- Commit often — small, frequent commits are easier to track.  
- Use meaningful commit messages (e.g., “Add RSVP animation” vs “update”).  
- Run `git status` whenever you’re unsure what’s going on.  
- After pushing, check Vercel to see your new deployment.  
- Always pull (`git pull`) before you start new work, so your code is up to date.

---

## 📘 Summary Table

| Action | Command |
|--------|----------|
| Check current state | `git status` |
| Add all changes | `git add .` |
| Commit (save) | `git commit -m "Your message"` |
| Push to GitHub (and redeploy) | `git push` |
| Pull latest from GitHub | `git pull` |
| Create a new branch | `git checkout -b feature-name` |
| Switch branches | `git checkout main` |
| Merge a branch | `git merge feature-name` |

---

## 🧭 Workflow Example

```bash
git status
git add .
git commit -m "Add shimmer animation to hero section"
git push
```

This will:
1. Stage and save your new animation locally.
2. Upload it to GitHub.
3. Trigger an automatic redeploy on Vercel. 🚀

---

## 🧱 Git Best Practices

### 🗒️ Commit Message Format
Use short, descriptive messages that explain what you did:
```
feat: add shimmer animation to hero section
fix: correct RSVP form field alignment
style: adjust colors and padding
refactor: clean up footer component
```
These prefixes make your history easier to read:
- **feat:** for new features  
- **fix:** for bug fixes  
- **style:** for visual/UI changes  
- **refactor:** for cleanup or structure improvements  
- **docs:** for documentation-only updates

---

### 🌿 Branch Naming Convention
When you start a new feature or change, create a branch with a meaningful name:
```bash
git checkout -b feature/hero-animation
git checkout -b fix/footer-links
git checkout -b style/update-palette
```
Keep names short and descriptive — lowercase, with hyphens.

---

### 🔄 Merge Workflow
When you finish a branch:
1. Switch back to main  
   ```bash
   git checkout main
   ```
2. Pull the latest updates  
   ```bash
   git pull
   ```
3. Merge your branch  
   ```bash
   git merge feature/hero-animation
   ```
4. Push your merged changes  
   ```bash
   git push
   ```

---

### 🧰 Useful Extras

#### Undo your last commit (before pushing)
```bash
git reset --soft HEAD~1
```

#### Cancel local changes (dangerous!)
```bash
git checkout -- .
```

#### View commit history
```bash
git log --oneline
```

---

## 🏁 TL;DR Workflow

```bash
git status
git add .
git commit -m "feat: update hero animation timing"
git push
```

➡️ Vercel will automatically rebuild and deploy your live site. 🎉