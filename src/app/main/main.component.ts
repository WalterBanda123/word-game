import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as bootstrap from 'bootstrap';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AuthService } from "../services/auth.service"
import {APIService} from "../API.service"

interface LanguageProgress {
  credits: number;
  currentLevel: number;
  unlockedLevels: number[];
  wordsCompleted: number;
  wordsSkipped: number;
  currentStreak: number;
  bestStreak: number;
}

interface GameProgress {
  [language: string]: LanguageProgress;
}

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
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  animations: [
    trigger('coinAnimation', [
      state('initial', style({
        transform: 'translateY(20px)',
        opacity: 0
      })),
      state('final', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('initial => final', [
        animate('300ms ease-out')
      ])
    ])

  ]
})
export class MainComponent implements OnInit {
  private readonly BASE_SKIP_COST = 300;
  public readonly REPLAY_WORD_SCORE = 2;
  private auth = inject(AuthService)
  player: { username: string, userId: string } = { username: '', userId: '' }

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

  ngOnInit() {
    this.initializeGame();
    this.loadSavedProgress();
    this.auth.getCurrentUser().subscribe((response) => {
      console.log(response)
      const { userId, username } = response
      this.player = { userId, username }
    })
  }



  celebrationMessage: string = '';
  modalMessage: string = '';
  lastWordScore: number = 0;
  isLevelComplete: boolean = false;
  isReplay: boolean = false;
  coinState: 'initial' | 'final' = 'initial';


  ngOnChanges() {
    if (this.lastWordScore > 0 && !this.isReplay) {
      this.coinState = 'initial';
      setTimeout(() => {
        this.coinState = 'final';
      }, 50);
    }
  }

  createGameProgress(){

  }

  gameProgress: GameProgress = {
    en: {
      credits: 100,
      currentLevel: 1,
      unlockedLevels: [1],
      wordsCompleted: 0,
      wordsSkipped: 0,
      currentStreak: 0,
      bestStreak: 0
    },
    sn: {
      credits: 100,
      currentLevel: 1,
      unlockedLevels: [1],
      wordsCompleted: 0,
      wordsSkipped: 0,
      currentStreak: 0,
      bestStreak: 0
    },
    nd: {
      credits: 100,
      currentLevel: 1,
      unlockedLevels: [1],
      wordsCompleted: 0,
      wordsSkipped: 0,
      currentStreak: 0,
      bestStreak: 0
    }
  };


  validateAndSubmitWord() {
    const word = this.getCurrentWordDisplay();

    // First check all discovered words (to prevent duplicate findings)
    const isReplay = this.wordList.some(w =>
      w.isDiscovered && w.word === word
    );

    if (isReplay) {
      // Handle replay case
      this.isWordCorrect = true;
      this.lastWordScore = 0;
      this.celebrationMessage = 'Word Already Found!';
      this.modalMessage = `You found: ${word} (already discovered)`;

      const modal = new bootstrap.Modal(document.getElementById('successModal')!);
      modal.show();

      setTimeout(() => {
        this.clearError();
        this.clearSelection();
        modal.hide();
      }, 2000);

      return;
    }

    // Check for valid words regardless of their order in the hints list
    const foundWord = this.wordList.find(w => w.word === word && !w.isDiscovered);

    if (foundWord) {
      this.clearError();
      this.processCorrectWord(foundWord);
    } else {
      this.handleIncorrectWord(word);
    }
  }

  getCurrentProgress(): LanguageProgress {
    return this.gameProgress[this.selectedLanguage];
  }

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



  uniqueLetters: UniqueLetter[] = [];
  selectedLetterIds: string[] = [];
  lastStarsEarned: number = 0;
  currentLevel: number = 1;
  selectedLanguage: LanguageCode = 'en';
  wordList: GameWord[] = [];
  isWordCorrect: boolean = false;
  celebrationMessages: string[] = [
    'Fantastic!', 'Amazing!', 'Brilliant!',
    'Wonderful!', 'Great job!', 'Excellent!'
  ];
  levelSkipCosts: { [levelId: number]: { [wordIndex: number]: number } } = {};

  constructor() {
    this.levels.forEach(level => {
      this.levelSkipCosts[level.id] = {};
    });
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
    this.clearLevelData();

    // Load progress for current language
    const currentProgress = this.getCurrentProgress();

    // Set current level from language progress
    this.currentLevel = currentProgress.currentLevel;

    // Reset word list for current level
    this.wordList = [...this.wordDatabase[this.selectedLanguage].levels[this.currentLevel].words];

    // Initialize skip costs for the new level
    this.initializeSkipCosts();

    // Create and shuffle letters for the new level
    this.createUniqueLetters();
    this.shuffleLetters();
    this.clearSelection();

    // Reset level completion flag
    this.isLevelComplete = false;
  }

  clearLevelData() {
    this.isLevelComplete = false;
    this.modalMessage = '';
    this.selectedLetterIds = [];
    this.isWordCorrect = false;
    this.celebrationMessage = '';
    this.uniqueLetters = [];
  }



  loadLevelProgress() {
    const savedProgress = localStorage.getItem(`level_${this.currentLevel}_progress`);
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      this.levelSkipCosts[this.currentLevel] = progress.skipCosts;

      this.wordList.forEach((word, index) => {
        if (index < progress.completedWords) {
          word.isDiscovered = true;
        }
      });
    }
  }

  loadLanguageProgress(language: LanguageCode) {
    const savedProgress = localStorage.getItem(`gameProgress_${language}`);
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      this.gameProgress[language] = progress.gameProgress;
      this.levelSkipCosts = progress.levelSkipCosts;

      if (progress.discoveredWords) {
        progress.discoveredWords.forEach((saved: { word: string, isDiscovered: boolean }) => {
          const word = this.wordList.find(w => w.word === saved.word);
          if (word) {
            word.isDiscovered = saved.isDiscovered;
          }
        });
      }
    }
  }

  changeLevel(event?: any) {
    const newLevel = event ? parseInt(event.target.value) : this.currentLevel;
    const currentProgress = this.getCurrentProgress();

    // Check if the level is unlocked (this includes both higher and lower levels)
    if (currentProgress.unlockedLevels.includes(newLevel)) {
      // Save progress of current level before changing
      this.saveLanguageProgress(this.selectedLanguage);

      // Update current level in both places
      this.currentLevel = newLevel;
      currentProgress.currentLevel = newLevel;

      // Initialize the new level
      this.initializeGame();
    }
  }

  initializeSkipCosts() {
    if (!this.levelSkipCosts[this.currentLevel]) {
      this.levelSkipCosts[this.currentLevel] = {};
      this.wordList.forEach((_, index) => {
        const levelMultiplier = 1 + (this.currentLevel - 1) * 0.5;
        this.levelSkipCosts[this.currentLevel][index] =
          Math.round(this.BASE_SKIP_COST * levelMultiplier);
      });
    }
  }

  skipWord(wordIndex: number) {
    const skipCost = this.getCurrentSkipCost(wordIndex);
    const currentCredits = this.getCurrentProgress().credits;

    if (currentCredits < skipCost) {
      this.showError = true;
      this.errorMessage = `Not enough credits! You need ${skipCost} credits to skip this word. Current balance: ${currentCredits} credits`;

      const modal = new bootstrap.Modal(document.getElementById('errorModal')!);
      modal.show();

      setTimeout(() => {
        this.clearError();
        modal.hide();
      }, 3000);

      return;
    }

    this.getCurrentProgress().credits -= skipCost;
    this.getCurrentProgress().wordsSkipped++;
    this.wordList[wordIndex].isDiscovered = true;

    this.increaseSkipCosts();

    this.getCurrentProgress().currentStreak = 0;
    this.checkLevelCompletion();
    this.saveLanguageProgress(this.selectedLanguage);
  }

  saveLanguageProgress(language: LanguageCode) {
    const progressData = {
      gameProgress: this.gameProgress[language],
      levelSkipCosts: this.levelSkipCosts,
      discoveredWords: this.wordList.map(w => ({
        word: w.word,
        isDiscovered: w.isDiscovered
      }))
    };
    localStorage.setItem(`gameProgress_${language}`, JSON.stringify(progressData));
  }

  checkLevelCompletion() {
    if (this.discoveredWords.length === this.totalWords) {
      this.handleLevelComplete();
    }
  }

  increaseSkipCosts() {
    Object.keys(this.levelSkipCosts[this.currentLevel]).forEach(index => {
      if (!this.wordList[Number(index)].isDiscovered) {
        const currentCost = this.levelSkipCosts[this.currentLevel][Number(index)];
        this.levelSkipCosts[this.currentLevel][Number(index)] =
          Math.round(currentCost * 1.2);
      }
    });
  }

  handleLevelComplete() {
    this.isLevelComplete = true;

    const currentProgress = this.getCurrentProgress();
    const nextLevelIndex = this.currentLevel;
    if (nextLevelIndex < this.levels.length) {

      if (!currentProgress.unlockedLevels.includes(nextLevelIndex + 1)) {
        currentProgress.unlockedLevels.push(nextLevelIndex + 1);
      }
    }

    const completionBonus = 50;
    currentProgress.credits += completionBonus;

    this.modalMessage = `Congratulations! You've completed Level ${this.currentLevel}!\nBonus: ${completionBonus} credits!`;

    this.saveLanguageProgress(this.selectedLanguage);
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

    this.wordList.forEach(word => {
      if (!word.isDiscovered) {
        const letters = word.word.split('');
        letters.forEach(letter => {
          requiredLetters.add(letter);
          letterCount.set(letter, (letterCount.get(letter) || 0) + 1);
        });
      }
    });

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
    if (this.currentLevel < this.levels.length) {
      // Increment current level in language progress
      this.getCurrentProgress().currentLevel = this.currentLevel + 1;
      this.currentLevel += 1;

      // Save progress before initializing new level
      this.saveLanguageProgress(this.selectedLanguage);

      // Initialize the new level
      this.initializeGame();

      // Close any open modals
      const successModal = document.getElementById('successModal');
      if (successModal) {
        const modal = bootstrap.Modal.getInstance(successModal);
        modal?.hide();
      }
    }
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
    this.saveLanguageProgress(this.selectedLanguage);
    this.loadLanguageProgress(this.selectedLanguage);

    this.currentLevel = this.getCurrentProgress().currentLevel;

    this.initializeGame();
  }

  getLocalizedHint(word: GameWord): string {
    return this.wordDatabase[this.selectedLanguage].levels[this.currentLevel].hints[word.word] || word.hint;
  }



  calculateWordScore(word: string, isReplay: boolean = false): number {
    if (isReplay) {
      return this.REPLAY_WORD_SCORE;
    }

    let credits = word.length * 2;
    credits += Math.min(this.getCurrentProgress().currentStreak, 5);
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

  processCorrectWord(foundWord: GameWord) {
    // Reset animation state
    this.coinState = 'initial';

    // Check if this is a replay
    this.isReplay = this.wordList.some(w =>
      w.isDiscovered && w.word === foundWord.word && w !== foundWord
    );

    // Mark the word as discovered
    foundWord.isDiscovered = true;

    // Calculate score and update progress only if not a replay
    if (!this.isReplay) {
      this.getCurrentProgress().wordsCompleted++;
      this.getCurrentProgress().currentStreak++;

      if (this.getCurrentProgress().currentStreak > this.getCurrentProgress().bestStreak) {
        this.getCurrentProgress().bestStreak = this.getCurrentProgress().currentStreak;
      }

      // Calculate and award credits
      this.lastWordScore = this.calculateWordScore(foundWord.word);
      this.getCurrentProgress().credits += this.lastWordScore;
    } else {
      this.lastWordScore = 0;
    }

    // Set celebration message
    this.celebrationMessage = this.celebrationMessages[
      Math.floor(Math.random() * this.celebrationMessages.length)
    ];

    this.isWordCorrect = true;
    this.modalMessage = `You discovered: ${foundWord.word}`;

    // Check if level is complete
    if (this.discoveredWords.length === this.totalWords) {
      this.handleLevelComplete();
    }

    // Show modal and trigger animation
    const modal = new bootstrap.Modal(document.getElementById('successModal')!);
    modal.show();

    // Trigger coin animation after a short delay
    setTimeout(() => {
      this.coinState = 'final';
    }, 100);

    if (!this.isLevelComplete) {
      setTimeout(() => {
        modal.hide();
        this.clearSelection();
      }, 2000);
    }

    // Save progress
    this.saveLanguageProgress(this.selectedLanguage);
  }

  watchAdForCredits() {
    const CREDITS_PER_AD = 50; // Configurable amount
    this.getCurrentProgress().credits += CREDITS_PER_AD;
    this.saveLanguageProgress(this.selectedLanguage);

    // Show success message
    this.modalMessage = `Earned ${CREDITS_PER_AD} credits from ad!`;
    const modal = new bootstrap.Modal(document.getElementById('successModal')!);
    modal.show();

    setTimeout(() => {
      modal.hide();
    }, 2000);
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
    this.coinState = 'initial';
  }
}
