# Synonym & Antonym Finder - Progressive Web App

A fast, offline-capable dictionary tool for finding synonyms and antonyms.

## 🌟 Features

### Core Functionality
- **Search Synonyms** - Find words with similar meanings
- **Search Antonyms** - Find words with opposite meanings
- **Hybrid Search** - Uses offline database + online API
- **Click-to-Search** - Click any result word to search it

### Smart Features
- ⭐ **Favorites** - Save words you use frequently
- 🕐 **History** - Track your recent searches (last 50)
- 📡 **Offline Mode** - Works without internet (100+ common words)
- 🌐 **Online Enhancement** - Thousands more words when connected
- 💾 **Data Persistence** - History and favorites saved locally

### PWA Benefits
- 📱 **Installable** - Add to home screen on any device
- ⚡ **Fast** - Instant searches for common words
- 🎨 **Clean UI** - Simple, intuitive interface
- 📱 **Mobile Optimized** - Works great on phones and tablets

## 🚀 How to Use

### Search for Words
1. Type a word in the search box
2. Press Enter or click "Search"
3. View synonyms (blue) and antonyms (red)
4. Click any word to search it instantly

### Save Favorites
- Click the ⭐ star icon next to any word
- Access favorites from the Favorites button
- Click any favorite to search it again

### View History
- Click "History" to see recent searches
- Click any word to search it again
- Clear individual items or all history

### Offline vs Online
- **Offline**: 100+ most common English words
- **Online**: Thousands of words via Datamuse API
- Status shown at top of page

## 📦 What's Included

- **index.html** - Main app (works standalone)
- **word-database.js** - 100+ words with synonyms/antonyms
- **manifest.json** - PWA configuration
- **icon-192.png** - Small app icon
- **icon-512.png** - Large app icon

## 🛠️ Technical Details

### Offline Database
- 100+ most common English words
- Each word has 5-8 synonyms and 3-6 antonyms
- Curated for accuracy and usefulness
- ~50KB file size

### Online API
- Uses Datamuse API (free, no key required)
- Searches 100,000+ words
- Returns up to 20 results per query
- Automatically falls back to offline if unavailable

### Data Storage
- **LocalStorage** for favorites and history
- **No backend required**
- **No tracking or analytics**
- **Private and secure**

## 📱 Installation

### Desktop
1. Visit the app URL
2. Look for install icon in address bar
3. Click "Install"

### Mobile (iOS)
1. Open in Safari
2. Tap Share button
3. Tap "Add to Home Screen"

### Mobile (Android)
1. Open in Chrome or Brave
2. Tap "Add to Home Screen" or "Install"

## 🎨 Color Coding

- **Blue chips** = Synonyms (similar meaning)
- **Red chips** = Antonyms (opposite meaning)
- **Yellow chips** = Favorite words
- **Purple theme** = App branding

## 💡 Pro Tips

1. **Quick navigation**: Click any result word to instantly search it
2. **Build vocabulary**: Save new words to favorites for later review
3. **Offline ready**: Install the app for instant access anytime
4. **History tracking**: Use history to review words you've looked up
5. **Compare opposites**: Search a word, then click its antonym to compare

## 🔒 Privacy

- No data sent to servers (except Datamuse API when online)
- No tracking or analytics
- No account required
- All data stored locally on your device
- Delete history/favorites anytime

## 🌐 Browser Support

- ✅ Chrome/Edge (Desktop & Mobile)
- ✅ Brave (Desktop & Mobile)
- ✅ Safari (iOS 11.3+, macOS)
- ✅ Firefox (Desktop & Mobile)
- ✅ Samsung Internet

## 📊 Database Coverage

### Included Offline (100+ words)
- Common adjectives (happy, sad, big, small, etc.)
- Common verbs (run, walk, give, take, etc.)
- Common nouns (with verb forms)
- Antonym pairs for all included words

### Available Online (100,000+ words)
- Technical terms
- Specialized vocabulary
- Uncommon words
- Regional variations

## 🎯 Use Cases

- **Writing**: Find better words while drafting
- **Studying**: Learn vocabulary and opposites
- **Teaching**: Show word relationships to students
- **Daily use**: Quick reference tool on phone
- **Offline work**: Access core vocabulary anywhere

## 🔄 Updates

This is a static PWA - no automatic updates.
To update: Delete and reinstall from the website.

## 🙏 Credits

- **API**: Datamuse API (https://www.datamuse.com/api/)
- **Design**: Custom UI with Tailwind CSS
- **Database**: Curated from common English usage

---

Enjoy your Synonym Finder! 📖✨
