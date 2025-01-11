import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as bootstrap from 'bootstrap';

interface UniqueLetter {
  id: string;
  value: string;
  isSelected: boolean;
  selectedPosition?: number; // Track position when selected
}
interface LanguageOption {
  code: LanguageCode;
  name: string;
}

type LanguageCode = 'en' | 'sn' | 'nd';

interface WordDatabase {
  [key: string]: {
    levels: {
      [level: number]: {
        words: GameWord[];
        hints: { [key: string]: string };
      }
    }
  };
}

interface PlayerStats {
  name: string;
  credits: number;
  wordsSkipped: number;
  wordsCompleted: number;
  currentStreak: number;
  bestStreak: number;
  unlockedLevels: number[];
}

interface Level {
  id: number;
  name: string;
  isUnlocked: boolean;
  skipCosts: { [wordIndex: number]: number };  // Track skip cost per word
}

interface GameWord {
  word: string;
  hint: string;
  isDiscovered: boolean;
  skipCost: number;  // Base skip cost for this word
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  private readonly BASE_SKIP_COST = 300;

  // Update selectLetter to handle both selection and deselection
  selectLetter(letter: UniqueLetter) {
    if (letter.isSelected) {
      // Deselect the letter
      this.deselectLetter(letter);
    } else {
      // Select the letter
      letter.isSelected = true;
      letter.selectedPosition = this.selectedLetterIds.length;
      this.selectedLetterIds.push(letter.id);
      this.checkWordCompletion();
    }
  }

  deselectLetter(letter: UniqueLetter) {
    const index = this.selectedLetterIds.indexOf(letter.id);
    if (index > -1) {
      // Remove the letter ID from selected letters
      this.selectedLetterIds.splice(index, 1);
      letter.isSelected = false;
      letter.selectedPosition = undefined;

      // Reorder remaining selected letters
      this.uniqueLetters
        .filter(l => l.isSelected && l.selectedPosition! > index)
        .forEach(l => l.selectedPosition! -= 1);
    }
  }

  levels: Level[] = [
    {
      id: 1,
      name: 'Level 1',
      isUnlocked: true,
      skipCosts: {}
    },
    {
      id: 2,
      name: 'Level 2',
      isUnlocked: false,
      skipCosts: {}
    },
    {
      id: 3,
      name: 'Level 3',
      isUnlocked: false,
      skipCosts: {}
    }
  ];

  // Updated player stats with credits instead of stars
  playerStats: PlayerStats = {
    name: 'Player 1',
    credits: 100,
    wordsSkipped: 0,
    wordsCompleted: 0,
    currentStreak: 0,
    bestStreak: 0,
    unlockedLevels: [1]
  };


  languages: LanguageOption[] = [
    { code: 'en', name: 'English' },
    { code: 'sn', name: 'Shona' },
    { code: 'nd', name: 'Ndebele' }
  ];

  wordDatabase: WordDatabase = {
    en: {
      levels: {
        1: {
          words: [
            { word: 'LOVE', hint: 'A deep affection', isDiscovered: false, skipCost: 20 },
            { word: 'LIFE', hint: 'Existence', isDiscovered: false, skipCost: 20 },
            { word: 'LIVE', hint: 'To exist', isDiscovered: false, skipCost: 20 },
            { word: 'EVIL', hint: 'The opposite of good', isDiscovered: false, skipCost: 20 }
          ],
          hints: {
            'LOVE': 'A deep affection',
            'LIFE': 'Existence',
            'LIVE': 'To exist',
            'EVIL': 'The opposite of good'
          }
        },
        2: {
          words: [
            { word: 'HEART', hint: 'Vital organ of love', isDiscovered: false, skipCost: 25 },
            { word: 'EARTH', hint: 'Our planet', isDiscovered: false, skipCost: 25 },
            { word: 'HEAR', hint: 'To perceive sound', isDiscovered: false, skipCost: 25 },
            { word: 'HEAT', hint: 'High temperature', isDiscovered: false, skipCost: 25 }
          ],
          hints: {
            'HEART': 'Vital organ of love',
            'EARTH': 'Our planet',
            'HEAR': 'To perceive sound',
            'HEAT': 'High temperature'
          }
        },
        3: {
          words: [
            { word: 'DREAM', hint: 'Vision during sleep', isDiscovered: false, skipCost: 30 },
            { word: 'DRAMA', hint: 'Theatrical performance', isDiscovered: false, skipCost: 30 },
            { word: 'MEDAL', hint: 'Award for achievement', isDiscovered: false, skipCost: 30 },
            { word: 'MADE', hint: 'Created or produced', isDiscovered: false, skipCost: 30 }
          ],
          hints: {
            'DREAM': 'Vision during sleep',
            'DRAMA': 'Theatrical performance',
            'MEDAL': 'Award for achievement',
            'MADE': 'Created or produced'
          }
        }
      }
    },
    sn: {
      levels: {
        1: {
          words: [
            { word: 'BABA', hint: 'Baba (Father)', isDiscovered: false, skipCost: 20 },
            { word: 'AMAI', hint: 'Amai (Mother)', isDiscovered: false, skipCost: 20 },
            { word: 'MWANA', hint: 'Mwanakomana (Child)', isDiscovered: false, skipCost: 20 }
          ],
          hints: {
            'BABA': 'Baba (Father)',
            'AMAI': 'Amai (Mother)',
            'MWANA': 'Mwanakomana (Child)'
          }
        },
        2: {
          words: [
            { word: 'MVURA', hint: 'Water', isDiscovered: false, skipCost: 25 },
            { word: 'SADZA', hint: 'Traditional meal', isDiscovered: false, skipCost: 25 },
            { word: 'MUSHA', hint: 'Home/Homestead', isDiscovered: false, skipCost: 25 }
          ],
          hints: {
            'MVURA': 'Water',
            'SADZA': 'Traditional meal',
            'MUSHA': 'Home/Homestead'
          }
        },
        3: {
          words: [
            { word: 'KURIMA', hint: 'To farm', isDiscovered: false, skipCost: 30 },
            { word: 'KUBIKA', hint: 'To cook', isDiscovered: false, skipCost: 30 },
            { word: 'KUTAURA', hint: 'To speak', isDiscovered: false, skipCost: 30 }
          ],
          hints: {
            'KURIMA': 'To farm',
            'KUBIKA': 'To cook',
            'KUTAURA': 'To speak'
          }
        }
      }
    },
    nd: {
      levels: {
        1: {
          words: [
            { word: 'BABA', hint: 'Ubaba (Father)', isDiscovered: false, skipCost: 20 },
            { word: 'MAMA', hint: 'Umama (Mother)', isDiscovered: false, skipCost: 20 },
            { word: 'ABANTU', hint: 'Abantu (People)', isDiscovered: false, skipCost: 20 }
          ],
          hints: {
            'BABA': 'Ubaba (Father)',
            'MAMA': 'Umama (Mother)',
            'ABANTU': 'Abantu (People)'
          }
        },
        2: {
          words: [
            { word: 'AMANZI', hint: 'Water', isDiscovered: false, skipCost: 25 },
            { word: 'ISINKWA', hint: 'Bread', isDiscovered: false, skipCost: 25 },
            { word: 'IKHAYA', hint: 'Home', isDiscovered: false, skipCost: 25 }
          ],
          hints: {
            'AMANZI': 'Water',
            'ISINKWA': 'Bread',
            'IKHAYA': 'Home'
          }
        },
        3: {
          words: [
            { word: 'UKULIMA', hint: 'To farm', isDiscovered: false, skipCost: 30 },
            { word: 'UKUPHEKA', hint: 'To cook', isDiscovered: false, skipCost: 30 },
            { word: 'UKUKHULUMA', hint: 'To speak', isDiscovered: false, skipCost: 30 }
          ],
          hints: {
            'UKULIMA': 'To farm',
            'UKUPHEKA': 'To cook',
            'UKUKHULUMA': 'To speak'
          }
        }
      }
    }
  };

  uniqueLetters: UniqueLetter[] = [];
  selectedLetterIds: string[] = [];
  isLevelComplete: boolean = false;
  modalMessage: string = '';
  currentLevel: number = 1;
  selectedLanguage: LanguageCode = 'en';
  wordList: GameWord[] = [];
  isWordCorrect: boolean = false;
  celebrationMessages: string[] = [
    'Fantastic!', 'Amazing!', 'Brilliant!',
    'Wonderful!', 'Great job!', 'Excellent!'
  ];
  celebrationMessage: string = '';
  levelSkipCosts: { [levelId: number]: { [wordIndex: number]: number } } = {};

  constructor() {
    // Initialize skip costs for each level
    this.levels.forEach(level => {
      this.levelSkipCosts[level.id] = {};
    });
  }

  ngOnInit() {
    this.initializeGame();
    this.loadSavedProgress(); // Add this to load any saved progress
  }

  loadSavedProgress() {
    const savedProgress = localStorage.getItem('gameProgress');
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      this.playerStats = progress.playerStats;
      this.levels = progress.levels;
      this.levelSkipCosts = progress.levelSkipCosts;
    }
  }

  initializeGame() {
    // Clear previous level data
    this.clearLevelData();

    // Reset word list for new level with the correct level access
    this.wordList = [...this.wordDatabase[this.selectedLanguage].levels[this.currentLevel].words];

    // Initialize or load skip costs for current level
    this.initializeSkipCosts();

    this.createUniqueLetters();
    this.shuffleLetters();
    this.clearSelection();

    // Load level-specific progress if exists
    this.loadLevelProgress();
  }

  loadLevelProgress() {
    const savedProgress = localStorage.getItem(`level_${this.currentLevel}_progress`);
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      this.levelSkipCosts[this.currentLevel] = progress.skipCosts;
      // Only load completed words status
      this.wordList.forEach((word, index) => {
        if (index < progress.completedWords) {
          word.isDiscovered = true;
        }
      });
    }
  }



  clearLevelData() {
    this.isLevelComplete = false;
    this.modalMessage = '';
    this.selectedLetterIds = [];
    this.isWordCorrect = false;
    this.celebrationMessage = '';
  }

  // Modified to properly handle level changes
  changeLevel(event?: any) {
    // If event exists, it means it was triggered by the dropdown
    const newLevel = event ? parseInt(event.target.value) : this.currentLevel;

    if (this.levels[newLevel - 1].isUnlocked) {
      this.saveCurrentLevelProgress(); // Save progress of current level
      this.currentLevel = newLevel;
      this.initializeGame();
    }
  }

  initializeSkipCosts() {
    if (!this.levelSkipCosts[this.currentLevel]) {
      this.levelSkipCosts[this.currentLevel] = {};
      this.wordList.forEach((_, index) => {
        // Start with BASE_SKIP_COST and increase for each level
        const levelMultiplier = 1 + (this.currentLevel - 1) * 0.5; // 50% increase per level
        this.levelSkipCosts[this.currentLevel][index] =
          Math.round(this.BASE_SKIP_COST * levelMultiplier);
      });
    }
  }

  skipWord(wordIndex: number) {
    const skipCost = this.getCurrentSkipCost(wordIndex);

    if (this.playerStats.credits >= skipCost) {
      // Deduct credits
      this.playerStats.credits -= skipCost;

      // Mark word as discovered
      this.wordList[wordIndex].isDiscovered = true;
      this.playerStats.wordsSkipped++;

      // Increase skip costs for remaining words in this level
      this.increaseSkipCosts();

      // Reset streak
      this.playerStats.currentStreak = 0;

      // Refresh available letters
      this.createUniqueLetters();
      this.shuffleLetters();

      // Check level completion
      this.checkLevelCompletion();

      // Save progress
      this.saveCurrentLevelProgress();
    }
  }

  checkLevelCompletion() {
    if (this.discoveredWords.length === this.totalWords) {
      this.handleLevelComplete();
    }
  }

  increaseSkipCosts() {
    Object.keys(this.levelSkipCosts[this.currentLevel]).forEach(index => {
      if (!this.wordList[Number(index)].isDiscovered) {
        // Increase cost by 20% for each skip
        const currentCost = this.levelSkipCosts[this.currentLevel][Number(index)];
        this.levelSkipCosts[this.currentLevel][Number(index)] =
          Math.round(currentCost * 1.2);
      }
    });
  }

  handleLevelComplete() {
    this.isLevelComplete = true;

    // Unlock next level if it exists
    const nextLevelIndex = this.currentLevel;
    if (nextLevelIndex < this.levels.length) {
      this.levels[nextLevelIndex].isUnlocked = true;
      if (!this.playerStats.unlockedLevels.includes(nextLevelIndex + 1)) {
        this.playerStats.unlockedLevels.push(nextLevelIndex + 1);
      }
    }

    // Award completion bonus
    const completionBonus = 50;
    this.playerStats.credits += completionBonus;

    this.modalMessage = `Congratulations! You've completed Level ${this.currentLevel}!\nBonus: ${completionBonus} credits!`;

    // Save progress
    this.saveProgress();
  }

  saveProgress() {
    const gameProgress = {
      playerStats: this.playerStats,
      levels: this.levels,
      levelSkipCosts: this.levelSkipCosts
    };
    localStorage.setItem('gameProgress', JSON.stringify(gameProgress));
  }

  saveCurrentLevelProgress() {
    const levelProgress = {
      completedWords: this.discoveredWords.length,
      skipCosts: this.levelSkipCosts[this.currentLevel],
      playerStats: this.playerStats
    };
    localStorage.setItem(`level_${this.currentLevel}_progress`, JSON.stringify(levelProgress));
  }

  getCurrentSkipCost(wordIndex: number): number {
    return this.levelSkipCosts[this.currentLevel][wordIndex] || this.BASE_SKIP_COST;
  }

  createUniqueLetters() {
    const requiredLetters = new Set<string>();
    const letterCount = new Map<string, number>();

    // Count required letters for undiscovered words
    this.wordList.forEach(word => {
      if (!word.isDiscovered) {
        const letters = word.word.split('');
        letters.forEach(letter => {
          requiredLetters.add(letter);
          letterCount.set(letter, (letterCount.get(letter) || 0) + 1);
        });
      }
    });

    // Create unique letters based on actual requirements
    this.uniqueLetters = [];
    letterCount.forEach((count, letter) => {
      for (let i = 0; i < count; i++) {
        this.uniqueLetters.push({
          id: `${letter}-${i}`,
          value: letter,
          isSelected: false
        });
      }
    });
  }

  getTargetWordLength(): number {
    const unsolvedWord = this.wordList.find(word => !word.isDiscovered);
    return unsolvedWord ? unsolvedWord.word.length : 0;
  }

  getCurrentWordDisplay(): string {
    const orderedLetters = this.uniqueLetters
      .filter(l => l.isSelected)
      .sort((a, b) => (a.selectedPosition || 0) - (b.selectedPosition || 0))
      .map(l => l.value);
    return orderedLetters.join('');
  }



  shuffleLetters() {
    for (let i = this.uniqueLetters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.uniqueLetters[i], this.uniqueLetters[j]] =
        [this.uniqueLetters[j], this.uniqueLetters[i]];
    }
  }

  nextLevel() {
    this.currentLevel++;
    this.initializeGame();
  }

  get totalWords(): number {
    return this.wordList.length;
  }

  get discoveredWords(): GameWord[] {
    return this.wordList.filter(word => word.isDiscovered);
  }

  get progressPercentage(): number {
    return (this.discoveredWords.length / this.totalWords) * 100;
  }

  get hasSelectedLetters(): boolean {
    return this.selectedLetterIds.length > 0;
  }

  changeLanguage() {
    this.initializeGame();
  }

  getLocalizedHint(word: GameWord): string {
    return this.wordDatabase[this.selectedLanguage].levels[this.currentLevel].hints[word.word] || word.hint;
  }


  lastWordScore: number = 0;
  lastStarsEarned: number = 0;


  calculateWordScore(word: string): number {
    // Base score calculation now awards credits instead
    let credits = word.length * 2;

    // Bonus for streak
    credits += Math.min(this.playerStats.currentStreak, 5);

    return credits;
  }


  submitWord() {
    const word = this.getCurrentWordDisplay();
    const foundWord = this.wordList.find(w => !w.isDiscovered && w.word === word);

    if (foundWord) {
      foundWord.isDiscovered = true;
      this.playerStats.wordsCompleted++;
      this.playerStats.currentStreak++;

      // Update best streak
      if (this.playerStats.currentStreak > this.playerStats.bestStreak) {
        this.playerStats.bestStreak = this.playerStats.currentStreak;
      }

      // Calculate rewards
      this.lastWordScore = this.calculateWordScore(word);

      // Award stars based on streak
      this.lastStarsEarned = Math.floor(this.playerStats.currentStreak / 5);

      this.celebrationMessage = this.celebrationMessages[
        Math.floor(Math.random() * this.celebrationMessages.length)
      ];

      this.isWordCorrect = true;
      this.modalMessage = `You discovered: ${word}`;

      if (this.discoveredWords.length === this.totalWords) {
        this.isLevelComplete = true;
        this.modalMessage = `Congratulations! You've completed Level ${this.currentLevel}!`;
        // Bonus stars for completing level
        this.lastStarsEarned += 3;
      }

      const modal = new bootstrap.Modal(document.getElementById('successModal')!);
      modal.show();

      setTimeout(() => {
        if (!this.isLevelComplete) {
          modal.hide();
          this.clearSelection();
        }
      }, 1500);
    } else {
      this.playerStats.currentStreak = 0;
      this.clearSelection();
    }
  }

  showError: boolean = false;
  errorMessage: string = '';
  errorTimeout: any;

  // ... (previous methods) ...

  checkWordCompletion() {
    const currentWord = this.getCurrentWordDisplay();
    if (currentWord.length === this.getTargetWordLength()) {
      this.validateAndSubmitWord();
    }
  }

  validateAndSubmitWord() {
    const word = this.getCurrentWordDisplay();
    const foundWord = this.wordList.find(w => !w.isDiscovered && w.word === word);

    if (foundWord) {
      // Clear any existing error state
      this.clearError();
      this.processCorrectWord(foundWord);
    } else {
      this.handleIncorrectWord(word);
    }
  }

  processCorrectWord(foundWord: GameWord) {
    foundWord.isDiscovered = true;
    this.playerStats.wordsCompleted++;
    this.playerStats.currentStreak++;

    if (this.playerStats.currentStreak > this.playerStats.bestStreak) {
      this.playerStats.bestStreak = this.playerStats.currentStreak;
    }

    const earnedCredits = this.calculateWordScore(foundWord.word);
    this.playerStats.credits += earnedCredits;

    this.modalMessage = `You discovered: ${foundWord.word}\nEarned: ${earnedCredits} credits!`;

    this.lastWordScore = this.calculateWordScore(foundWord.word);


    this.lastStarsEarned = Math.floor(this.playerStats.currentStreak / 5);


    this.celebrationMessage = this.celebrationMessages[
      Math.floor(Math.random() * this.celebrationMessages.length)
    ];

    this.isWordCorrect = true;
    this.modalMessage = `You discovered: ${foundWord.word}`;

    if (this.discoveredWords.length === this.totalWords) {
      this.handleLevelComplete();
    }

    const modal = new bootstrap.Modal(document.getElementById('successModal')!);
    modal.show();

    setTimeout(() => {
      if (!this.isLevelComplete) {
        modal.hide();
        this.clearSelection();
      }
    }, 1500);
  }

  handleIncorrectWord(word: string) {
    this.playerStats.currentStreak = 0;
    this.isWordCorrect = false;
    this.showError = true;
    this.errorMessage = `"${word}" is not a valid word!`;

    // Clear any existing timeout
    if (this.errorTimeout) {
      clearTimeout(this.errorTimeout);
    }

    // Show error modal
    const modal = new bootstrap.Modal(document.getElementById('errorModal')!);
    modal.show();

    // Auto-hide error after 2 seconds
    this.errorTimeout = setTimeout(() => {
      this.clearError();
      this.clearSelection();
      modal.hide();
    }, 2000);
  }

  clearError() {
    this.showError = false;
    this.errorMessage = '';
    if (this.errorTimeout) {
      clearTimeout(this.errorTimeout);
    }
  }

  clearSelection() {
    this.uniqueLetters.forEach(letter => letter.isSelected = false);
    this.selectedLetterIds = [];
    this.isWordCorrect = false;
    this.clearError();
  }

}
