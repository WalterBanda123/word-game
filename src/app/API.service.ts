/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult} from "@aws-amplify/api-graphql";
import { generateClient } from 'aws-amplify/api';
import { Observable } from "zen-observable-ts";

const client = generateClient()

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateUser: OnCreateUserSubscription;
  onUpdateUser: OnUpdateUserSubscription;
  onDeleteUser: OnDeleteUserSubscription;
  onCreateGameProgress: OnCreateGameProgressSubscription;
  onUpdateGameProgress: OnUpdateGameProgressSubscription;
  onDeleteGameProgress: OnDeleteGameProgressSubscription;
  onCreateDiscoveredWord: OnCreateDiscoveredWordSubscription;
  onUpdateDiscoveredWord: OnUpdateDiscoveredWordSubscription;
  onDeleteDiscoveredWord: OnDeleteDiscoveredWordSubscription;
  onCreateWordDatabase: OnCreateWordDatabaseSubscription;
  onUpdateWordDatabase: OnUpdateWordDatabaseSubscription;
  onDeleteWordDatabase: OnDeleteWordDatabaseSubscription;
  onCreateLevel: OnCreateLevelSubscription;
  onUpdateLevel: OnUpdateLevelSubscription;
  onDeleteLevel: OnDeleteLevelSubscription;
  onCreateWord: OnCreateWordSubscription;
  onUpdateWord: OnUpdateWordSubscription;
  onDeleteWord: OnDeleteWordSubscription;
};

export type CreateUserInput = {
  id?: string | null;
  cognitoId: string;
  username: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelUserConditionInput = {
  cognitoId?: ModelStringInput | null;
  username?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
  owner?: ModelStringInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type User = {
  __typename: "User";
  id: string;
  cognitoId: string;
  username: string;
  gameProgresses?: ModelGameProgressConnection | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ModelGameProgressConnection = {
  __typename: "ModelGameProgressConnection";
  items: Array<GameProgress | null>;
  nextToken?: string | null;
};

export type GameProgress = {
  __typename: "GameProgress";
  id: string;
  userID: string;
  user: User;
  languageCode: LanguageCode;
  credits: number;
  currentLevel: number;
  unlockedLevels: Array<number | null>;
  wordsCompleted: number;
  wordsSkipped: number;
  currentStreak: number;
  bestStreak: number;
  discoveredWords?: ModelDiscoveredWordConnection | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export enum LanguageCode {
  en = "en",
  sn = "sn",
  nd = "nd"
}

export type ModelDiscoveredWordConnection = {
  __typename: "ModelDiscoveredWordConnection";
  items: Array<DiscoveredWord | null>;
  nextToken?: string | null;
};

export type DiscoveredWord = {
  __typename: "DiscoveredWord";
  id: string;
  gameProgressID: string;
  gameProgress: GameProgress;
  wordID: string;
  word: Word;
  isDiscovered: boolean;
  discoveredAt: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type Word = {
  __typename: "Word";
  id: string;
  levelID: string;
  level: Level;
  word: string;
  hint: string;
  skipCost: number;
  createdAt: string;
  updatedAt: string;
};

export type Level = {
  __typename: "Level";
  id: string;
  wordDatabaseID: string;
  wordDatabase: WordDatabase;
  levelNumber: number;
  words?: ModelWordConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type WordDatabase = {
  __typename: "WordDatabase";
  id: string;
  languageCode: LanguageCode;
  levels?: ModelLevelConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelLevelConnection = {
  __typename: "ModelLevelConnection";
  items: Array<Level | null>;
  nextToken?: string | null;
};

export type ModelWordConnection = {
  __typename: "ModelWordConnection";
  items: Array<Word | null>;
  nextToken?: string | null;
};

export type UpdateUserInput = {
  id: string;
  cognitoId?: string | null;
  username?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type CreateGameProgressInput = {
  id?: string | null;
  userID: string;
  languageCode: LanguageCode;
  credits: number;
  currentLevel: number;
  unlockedLevels: Array<number | null>;
  wordsCompleted: number;
  wordsSkipped: number;
  currentStreak: number;
  bestStreak: number;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelGameProgressConditionInput = {
  userID?: ModelIDInput | null;
  languageCode?: ModelLanguageCodeInput | null;
  credits?: ModelIntInput | null;
  currentLevel?: ModelIntInput | null;
  unlockedLevels?: ModelIntInput | null;
  wordsCompleted?: ModelIntInput | null;
  wordsSkipped?: ModelIntInput | null;
  currentStreak?: ModelIntInput | null;
  bestStreak?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelGameProgressConditionInput | null> | null;
  or?: Array<ModelGameProgressConditionInput | null> | null;
  not?: ModelGameProgressConditionInput | null;
  owner?: ModelStringInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelLanguageCodeInput = {
  eq?: LanguageCode | null;
  ne?: LanguageCode | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateGameProgressInput = {
  id: string;
  userID?: string | null;
  languageCode?: LanguageCode | null;
  credits?: number | null;
  currentLevel?: number | null;
  unlockedLevels?: Array<number | null> | null;
  wordsCompleted?: number | null;
  wordsSkipped?: number | null;
  currentStreak?: number | null;
  bestStreak?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteGameProgressInput = {
  id: string;
};

export type CreateDiscoveredWordInput = {
  id?: string | null;
  gameProgressID: string;
  wordID: string;
  isDiscovered: boolean;
  discoveredAt: string;
};

export type ModelDiscoveredWordConditionInput = {
  gameProgressID?: ModelIDInput | null;
  wordID?: ModelIDInput | null;
  isDiscovered?: ModelBooleanInput | null;
  discoveredAt?: ModelStringInput | null;
  and?: Array<ModelDiscoveredWordConditionInput | null> | null;
  or?: Array<ModelDiscoveredWordConditionInput | null> | null;
  not?: ModelDiscoveredWordConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  owner?: ModelStringInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateDiscoveredWordInput = {
  id: string;
  gameProgressID?: string | null;
  wordID?: string | null;
  isDiscovered?: boolean | null;
  discoveredAt?: string | null;
};

export type DeleteDiscoveredWordInput = {
  id: string;
};

export type CreateWordDatabaseInput = {
  id?: string | null;
  languageCode: LanguageCode;
};

export type ModelWordDatabaseConditionInput = {
  languageCode?: ModelLanguageCodeInput | null;
  and?: Array<ModelWordDatabaseConditionInput | null> | null;
  or?: Array<ModelWordDatabaseConditionInput | null> | null;
  not?: ModelWordDatabaseConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
};

export type UpdateWordDatabaseInput = {
  id: string;
  languageCode?: LanguageCode | null;
};

export type DeleteWordDatabaseInput = {
  id: string;
};

export type CreateLevelInput = {
  id?: string | null;
  wordDatabaseID: string;
  levelNumber: number;
};

export type ModelLevelConditionInput = {
  wordDatabaseID?: ModelIDInput | null;
  levelNumber?: ModelIntInput | null;
  and?: Array<ModelLevelConditionInput | null> | null;
  or?: Array<ModelLevelConditionInput | null> | null;
  not?: ModelLevelConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
};

export type UpdateLevelInput = {
  id: string;
  wordDatabaseID?: string | null;
  levelNumber?: number | null;
};

export type DeleteLevelInput = {
  id: string;
};

export type CreateWordInput = {
  id?: string | null;
  levelID: string;
  word: string;
  hint: string;
  skipCost: number;
};

export type ModelWordConditionInput = {
  levelID?: ModelIDInput | null;
  word?: ModelStringInput | null;
  hint?: ModelStringInput | null;
  skipCost?: ModelIntInput | null;
  and?: Array<ModelWordConditionInput | null> | null;
  or?: Array<ModelWordConditionInput | null> | null;
  not?: ModelWordConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
};

export type UpdateWordInput = {
  id: string;
  levelID?: string | null;
  word?: string | null;
  hint?: string | null;
  skipCost?: number | null;
};

export type DeleteWordInput = {
  id: string;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  cognitoId?: ModelStringInput | null;
  username?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
  owner?: ModelStringInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items: Array<User | null>;
  nextToken?: string | null;
};

export type ModelGameProgressFilterInput = {
  id?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  languageCode?: ModelLanguageCodeInput | null;
  credits?: ModelIntInput | null;
  currentLevel?: ModelIntInput | null;
  unlockedLevels?: ModelIntInput | null;
  wordsCompleted?: ModelIntInput | null;
  wordsSkipped?: ModelIntInput | null;
  currentStreak?: ModelIntInput | null;
  bestStreak?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelGameProgressFilterInput | null> | null;
  or?: Array<ModelGameProgressFilterInput | null> | null;
  not?: ModelGameProgressFilterInput | null;
  owner?: ModelStringInput | null;
};

export type ModelDiscoveredWordFilterInput = {
  id?: ModelIDInput | null;
  gameProgressID?: ModelIDInput | null;
  wordID?: ModelIDInput | null;
  isDiscovered?: ModelBooleanInput | null;
  discoveredAt?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelDiscoveredWordFilterInput | null> | null;
  or?: Array<ModelDiscoveredWordFilterInput | null> | null;
  not?: ModelDiscoveredWordFilterInput | null;
  owner?: ModelStringInput | null;
};

export type ModelWordDatabaseFilterInput = {
  id?: ModelIDInput | null;
  languageCode?: ModelLanguageCodeInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelWordDatabaseFilterInput | null> | null;
  or?: Array<ModelWordDatabaseFilterInput | null> | null;
  not?: ModelWordDatabaseFilterInput | null;
};

export type ModelWordDatabaseConnection = {
  __typename: "ModelWordDatabaseConnection";
  items: Array<WordDatabase | null>;
  nextToken?: string | null;
};

export type ModelLevelFilterInput = {
  id?: ModelIDInput | null;
  wordDatabaseID?: ModelIDInput | null;
  levelNumber?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelLevelFilterInput | null> | null;
  or?: Array<ModelLevelFilterInput | null> | null;
  not?: ModelLevelFilterInput | null;
};

export type ModelWordFilterInput = {
  id?: ModelIDInput | null;
  levelID?: ModelIDInput | null;
  word?: ModelStringInput | null;
  hint?: ModelStringInput | null;
  skipCost?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelWordFilterInput | null> | null;
  or?: Array<ModelWordFilterInput | null> | null;
  not?: ModelWordFilterInput | null;
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  cognitoId?: ModelSubscriptionStringInput | null;
  username?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserFilterInput | null> | null;
  owner?: ModelStringInput | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionGameProgressFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  userID?: ModelSubscriptionIDInput | null;
  languageCode?: ModelSubscriptionStringInput | null;
  credits?: ModelSubscriptionIntInput | null;
  currentLevel?: ModelSubscriptionIntInput | null;
  unlockedLevels?: ModelSubscriptionIntInput | null;
  wordsCompleted?: ModelSubscriptionIntInput | null;
  wordsSkipped?: ModelSubscriptionIntInput | null;
  currentStreak?: ModelSubscriptionIntInput | null;
  bestStreak?: ModelSubscriptionIntInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionGameProgressFilterInput | null> | null;
  or?: Array<ModelSubscriptionGameProgressFilterInput | null> | null;
  owner?: ModelStringInput | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionDiscoveredWordFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  gameProgressID?: ModelSubscriptionIDInput | null;
  wordID?: ModelSubscriptionIDInput | null;
  isDiscovered?: ModelSubscriptionBooleanInput | null;
  discoveredAt?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionDiscoveredWordFilterInput | null> | null;
  or?: Array<ModelSubscriptionDiscoveredWordFilterInput | null> | null;
  owner?: ModelStringInput | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type ModelSubscriptionWordDatabaseFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  languageCode?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionWordDatabaseFilterInput | null> | null;
  or?: Array<ModelSubscriptionWordDatabaseFilterInput | null> | null;
};

export type ModelSubscriptionLevelFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  wordDatabaseID?: ModelSubscriptionIDInput | null;
  levelNumber?: ModelSubscriptionIntInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionLevelFilterInput | null> | null;
  or?: Array<ModelSubscriptionLevelFilterInput | null> | null;
};

export type ModelSubscriptionWordFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  levelID?: ModelSubscriptionIDInput | null;
  word?: ModelSubscriptionStringInput | null;
  hint?: ModelSubscriptionStringInput | null;
  skipCost?: ModelSubscriptionIntInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionWordFilterInput | null> | null;
  or?: Array<ModelSubscriptionWordFilterInput | null> | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  cognitoId: string;
  username: string;
  gameProgresses?: {
    __typename: "ModelGameProgressConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  cognitoId: string;
  username: string;
  gameProgresses?: {
    __typename: "ModelGameProgressConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  cognitoId: string;
  username: string;
  gameProgresses?: {
    __typename: "ModelGameProgressConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type CreateGameProgressMutation = {
  __typename: "GameProgress";
  id: string;
  userID: string;
  user: {
    __typename: "User";
    id: string;
    cognitoId: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  languageCode: LanguageCode;
  credits: number;
  currentLevel: number;
  unlockedLevels: Array<number | null>;
  wordsCompleted: number;
  wordsSkipped: number;
  currentStreak: number;
  bestStreak: number;
  discoveredWords?: {
    __typename: "ModelDiscoveredWordConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateGameProgressMutation = {
  __typename: "GameProgress";
  id: string;
  userID: string;
  user: {
    __typename: "User";
    id: string;
    cognitoId: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  languageCode: LanguageCode;
  credits: number;
  currentLevel: number;
  unlockedLevels: Array<number | null>;
  wordsCompleted: number;
  wordsSkipped: number;
  currentStreak: number;
  bestStreak: number;
  discoveredWords?: {
    __typename: "ModelDiscoveredWordConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteGameProgressMutation = {
  __typename: "GameProgress";
  id: string;
  userID: string;
  user: {
    __typename: "User";
    id: string;
    cognitoId: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  languageCode: LanguageCode;
  credits: number;
  currentLevel: number;
  unlockedLevels: Array<number | null>;
  wordsCompleted: number;
  wordsSkipped: number;
  currentStreak: number;
  bestStreak: number;
  discoveredWords?: {
    __typename: "ModelDiscoveredWordConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type CreateDiscoveredWordMutation = {
  __typename: "DiscoveredWord";
  id: string;
  gameProgressID: string;
  gameProgress: {
    __typename: "GameProgress";
    id: string;
    userID: string;
    languageCode: LanguageCode;
    credits: number;
    currentLevel: number;
    unlockedLevels: Array<number | null>;
    wordsCompleted: number;
    wordsSkipped: number;
    currentStreak: number;
    bestStreak: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  wordID: string;
  word: {
    __typename: "Word";
    id: string;
    levelID: string;
    word: string;
    hint: string;
    skipCost: number;
    createdAt: string;
    updatedAt: string;
  };
  isDiscovered: boolean;
  discoveredAt: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateDiscoveredWordMutation = {
  __typename: "DiscoveredWord";
  id: string;
  gameProgressID: string;
  gameProgress: {
    __typename: "GameProgress";
    id: string;
    userID: string;
    languageCode: LanguageCode;
    credits: number;
    currentLevel: number;
    unlockedLevels: Array<number | null>;
    wordsCompleted: number;
    wordsSkipped: number;
    currentStreak: number;
    bestStreak: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  wordID: string;
  word: {
    __typename: "Word";
    id: string;
    levelID: string;
    word: string;
    hint: string;
    skipCost: number;
    createdAt: string;
    updatedAt: string;
  };
  isDiscovered: boolean;
  discoveredAt: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteDiscoveredWordMutation = {
  __typename: "DiscoveredWord";
  id: string;
  gameProgressID: string;
  gameProgress: {
    __typename: "GameProgress";
    id: string;
    userID: string;
    languageCode: LanguageCode;
    credits: number;
    currentLevel: number;
    unlockedLevels: Array<number | null>;
    wordsCompleted: number;
    wordsSkipped: number;
    currentStreak: number;
    bestStreak: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  wordID: string;
  word: {
    __typename: "Word";
    id: string;
    levelID: string;
    word: string;
    hint: string;
    skipCost: number;
    createdAt: string;
    updatedAt: string;
  };
  isDiscovered: boolean;
  discoveredAt: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type CreateWordDatabaseMutation = {
  __typename: "WordDatabase";
  id: string;
  languageCode: LanguageCode;
  levels?: {
    __typename: "ModelLevelConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateWordDatabaseMutation = {
  __typename: "WordDatabase";
  id: string;
  languageCode: LanguageCode;
  levels?: {
    __typename: "ModelLevelConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteWordDatabaseMutation = {
  __typename: "WordDatabase";
  id: string;
  languageCode: LanguageCode;
  levels?: {
    __typename: "ModelLevelConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateLevelMutation = {
  __typename: "Level";
  id: string;
  wordDatabaseID: string;
  wordDatabase: {
    __typename: "WordDatabase";
    id: string;
    languageCode: LanguageCode;
    createdAt: string;
    updatedAt: string;
  };
  levelNumber: number;
  words?: {
    __typename: "ModelWordConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateLevelMutation = {
  __typename: "Level";
  id: string;
  wordDatabaseID: string;
  wordDatabase: {
    __typename: "WordDatabase";
    id: string;
    languageCode: LanguageCode;
    createdAt: string;
    updatedAt: string;
  };
  levelNumber: number;
  words?: {
    __typename: "ModelWordConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteLevelMutation = {
  __typename: "Level";
  id: string;
  wordDatabaseID: string;
  wordDatabase: {
    __typename: "WordDatabase";
    id: string;
    languageCode: LanguageCode;
    createdAt: string;
    updatedAt: string;
  };
  levelNumber: number;
  words?: {
    __typename: "ModelWordConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateWordMutation = {
  __typename: "Word";
  id: string;
  levelID: string;
  level: {
    __typename: "Level";
    id: string;
    wordDatabaseID: string;
    levelNumber: number;
    createdAt: string;
    updatedAt: string;
  };
  word: string;
  hint: string;
  skipCost: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateWordMutation = {
  __typename: "Word";
  id: string;
  levelID: string;
  level: {
    __typename: "Level";
    id: string;
    wordDatabaseID: string;
    levelNumber: number;
    createdAt: string;
    updatedAt: string;
  };
  word: string;
  hint: string;
  skipCost: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteWordMutation = {
  __typename: "Word";
  id: string;
  levelID: string;
  level: {
    __typename: "Level";
    id: string;
    wordDatabaseID: string;
    levelNumber: number;
    createdAt: string;
    updatedAt: string;
  };
  word: string;
  hint: string;
  skipCost: number;
  createdAt: string;
  updatedAt: string;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  cognitoId: string;
  username: string;
  gameProgresses?: {
    __typename: "ModelGameProgressConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    cognitoId: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetGameProgressQuery = {
  __typename: "GameProgress";
  id: string;
  userID: string;
  user: {
    __typename: "User";
    id: string;
    cognitoId: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  languageCode: LanguageCode;
  credits: number;
  currentLevel: number;
  unlockedLevels: Array<number | null>;
  wordsCompleted: number;
  wordsSkipped: number;
  currentStreak: number;
  bestStreak: number;
  discoveredWords?: {
    __typename: "ModelDiscoveredWordConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListGameProgressesQuery = {
  __typename: "ModelGameProgressConnection";
  items: Array<{
    __typename: "GameProgress";
    id: string;
    userID: string;
    languageCode: LanguageCode;
    credits: number;
    currentLevel: number;
    unlockedLevels: Array<number | null>;
    wordsCompleted: number;
    wordsSkipped: number;
    currentStreak: number;
    bestStreak: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetDiscoveredWordQuery = {
  __typename: "DiscoveredWord";
  id: string;
  gameProgressID: string;
  gameProgress: {
    __typename: "GameProgress";
    id: string;
    userID: string;
    languageCode: LanguageCode;
    credits: number;
    currentLevel: number;
    unlockedLevels: Array<number | null>;
    wordsCompleted: number;
    wordsSkipped: number;
    currentStreak: number;
    bestStreak: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  wordID: string;
  word: {
    __typename: "Word";
    id: string;
    levelID: string;
    word: string;
    hint: string;
    skipCost: number;
    createdAt: string;
    updatedAt: string;
  };
  isDiscovered: boolean;
  discoveredAt: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListDiscoveredWordsQuery = {
  __typename: "ModelDiscoveredWordConnection";
  items: Array<{
    __typename: "DiscoveredWord";
    id: string;
    gameProgressID: string;
    wordID: string;
    isDiscovered: boolean;
    discoveredAt: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type UsersByCognitoIdQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    cognitoId: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GameProgressesByUserIDQuery = {
  __typename: "ModelGameProgressConnection";
  items: Array<{
    __typename: "GameProgress";
    id: string;
    userID: string;
    languageCode: LanguageCode;
    credits: number;
    currentLevel: number;
    unlockedLevels: Array<number | null>;
    wordsCompleted: number;
    wordsSkipped: number;
    currentStreak: number;
    bestStreak: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type DiscoveredWordsByGameProgressIDQuery = {
  __typename: "ModelDiscoveredWordConnection";
  items: Array<{
    __typename: "DiscoveredWord";
    id: string;
    gameProgressID: string;
    wordID: string;
    isDiscovered: boolean;
    discoveredAt: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetWordDatabaseQuery = {
  __typename: "WordDatabase";
  id: string;
  languageCode: LanguageCode;
  levels?: {
    __typename: "ModelLevelConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListWordDatabasesQuery = {
  __typename: "ModelWordDatabaseConnection";
  items: Array<{
    __typename: "WordDatabase";
    id: string;
    languageCode: LanguageCode;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetLevelQuery = {
  __typename: "Level";
  id: string;
  wordDatabaseID: string;
  wordDatabase: {
    __typename: "WordDatabase";
    id: string;
    languageCode: LanguageCode;
    createdAt: string;
    updatedAt: string;
  };
  levelNumber: number;
  words?: {
    __typename: "ModelWordConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListLevelsQuery = {
  __typename: "ModelLevelConnection";
  items: Array<{
    __typename: "Level";
    id: string;
    wordDatabaseID: string;
    levelNumber: number;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type LevelsByWordDatabaseIDQuery = {
  __typename: "ModelLevelConnection";
  items: Array<{
    __typename: "Level";
    id: string;
    wordDatabaseID: string;
    levelNumber: number;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetWordQuery = {
  __typename: "Word";
  id: string;
  levelID: string;
  level: {
    __typename: "Level";
    id: string;
    wordDatabaseID: string;
    levelNumber: number;
    createdAt: string;
    updatedAt: string;
  };
  word: string;
  hint: string;
  skipCost: number;
  createdAt: string;
  updatedAt: string;
};

export type ListWordsQuery = {
  __typename: "ModelWordConnection";
  items: Array<{
    __typename: "Word";
    id: string;
    levelID: string;
    word: string;
    hint: string;
    skipCost: number;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type WordsByLevelIDQuery = {
  __typename: "ModelWordConnection";
  items: Array<{
    __typename: "Word";
    id: string;
    levelID: string;
    word: string;
    hint: string;
    skipCost: number;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  cognitoId: string;
  username: string;
  gameProgresses?: {
    __typename: "ModelGameProgressConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  cognitoId: string;
  username: string;
  gameProgresses?: {
    __typename: "ModelGameProgressConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  cognitoId: string;
  username: string;
  gameProgresses?: {
    __typename: "ModelGameProgressConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnCreateGameProgressSubscription = {
  __typename: "GameProgress";
  id: string;
  userID: string;
  user: {
    __typename: "User";
    id: string;
    cognitoId: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  languageCode: LanguageCode;
  credits: number;
  currentLevel: number;
  unlockedLevels: Array<number | null>;
  wordsCompleted: number;
  wordsSkipped: number;
  currentStreak: number;
  bestStreak: number;
  discoveredWords?: {
    __typename: "ModelDiscoveredWordConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateGameProgressSubscription = {
  __typename: "GameProgress";
  id: string;
  userID: string;
  user: {
    __typename: "User";
    id: string;
    cognitoId: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  languageCode: LanguageCode;
  credits: number;
  currentLevel: number;
  unlockedLevels: Array<number | null>;
  wordsCompleted: number;
  wordsSkipped: number;
  currentStreak: number;
  bestStreak: number;
  discoveredWords?: {
    __typename: "ModelDiscoveredWordConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteGameProgressSubscription = {
  __typename: "GameProgress";
  id: string;
  userID: string;
  user: {
    __typename: "User";
    id: string;
    cognitoId: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  languageCode: LanguageCode;
  credits: number;
  currentLevel: number;
  unlockedLevels: Array<number | null>;
  wordsCompleted: number;
  wordsSkipped: number;
  currentStreak: number;
  bestStreak: number;
  discoveredWords?: {
    __typename: "ModelDiscoveredWordConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnCreateDiscoveredWordSubscription = {
  __typename: "DiscoveredWord";
  id: string;
  gameProgressID: string;
  gameProgress: {
    __typename: "GameProgress";
    id: string;
    userID: string;
    languageCode: LanguageCode;
    credits: number;
    currentLevel: number;
    unlockedLevels: Array<number | null>;
    wordsCompleted: number;
    wordsSkipped: number;
    currentStreak: number;
    bestStreak: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  wordID: string;
  word: {
    __typename: "Word";
    id: string;
    levelID: string;
    word: string;
    hint: string;
    skipCost: number;
    createdAt: string;
    updatedAt: string;
  };
  isDiscovered: boolean;
  discoveredAt: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateDiscoveredWordSubscription = {
  __typename: "DiscoveredWord";
  id: string;
  gameProgressID: string;
  gameProgress: {
    __typename: "GameProgress";
    id: string;
    userID: string;
    languageCode: LanguageCode;
    credits: number;
    currentLevel: number;
    unlockedLevels: Array<number | null>;
    wordsCompleted: number;
    wordsSkipped: number;
    currentStreak: number;
    bestStreak: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  wordID: string;
  word: {
    __typename: "Word";
    id: string;
    levelID: string;
    word: string;
    hint: string;
    skipCost: number;
    createdAt: string;
    updatedAt: string;
  };
  isDiscovered: boolean;
  discoveredAt: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteDiscoveredWordSubscription = {
  __typename: "DiscoveredWord";
  id: string;
  gameProgressID: string;
  gameProgress: {
    __typename: "GameProgress";
    id: string;
    userID: string;
    languageCode: LanguageCode;
    credits: number;
    currentLevel: number;
    unlockedLevels: Array<number | null>;
    wordsCompleted: number;
    wordsSkipped: number;
    currentStreak: number;
    bestStreak: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  wordID: string;
  word: {
    __typename: "Word";
    id: string;
    levelID: string;
    word: string;
    hint: string;
    skipCost: number;
    createdAt: string;
    updatedAt: string;
  };
  isDiscovered: boolean;
  discoveredAt: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnCreateWordDatabaseSubscription = {
  __typename: "WordDatabase";
  id: string;
  languageCode: LanguageCode;
  levels?: {
    __typename: "ModelLevelConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateWordDatabaseSubscription = {
  __typename: "WordDatabase";
  id: string;
  languageCode: LanguageCode;
  levels?: {
    __typename: "ModelLevelConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteWordDatabaseSubscription = {
  __typename: "WordDatabase";
  id: string;
  languageCode: LanguageCode;
  levels?: {
    __typename: "ModelLevelConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateLevelSubscription = {
  __typename: "Level";
  id: string;
  wordDatabaseID: string;
  wordDatabase: {
    __typename: "WordDatabase";
    id: string;
    languageCode: LanguageCode;
    createdAt: string;
    updatedAt: string;
  };
  levelNumber: number;
  words?: {
    __typename: "ModelWordConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateLevelSubscription = {
  __typename: "Level";
  id: string;
  wordDatabaseID: string;
  wordDatabase: {
    __typename: "WordDatabase";
    id: string;
    languageCode: LanguageCode;
    createdAt: string;
    updatedAt: string;
  };
  levelNumber: number;
  words?: {
    __typename: "ModelWordConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteLevelSubscription = {
  __typename: "Level";
  id: string;
  wordDatabaseID: string;
  wordDatabase: {
    __typename: "WordDatabase";
    id: string;
    languageCode: LanguageCode;
    createdAt: string;
    updatedAt: string;
  };
  levelNumber: number;
  words?: {
    __typename: "ModelWordConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateWordSubscription = {
  __typename: "Word";
  id: string;
  levelID: string;
  level: {
    __typename: "Level";
    id: string;
    wordDatabaseID: string;
    levelNumber: number;
    createdAt: string;
    updatedAt: string;
  };
  word: string;
  hint: string;
  skipCost: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateWordSubscription = {
  __typename: "Word";
  id: string;
  levelID: string;
  level: {
    __typename: "Level";
    id: string;
    wordDatabaseID: string;
    levelNumber: number;
    createdAt: string;
    updatedAt: string;
  };
  word: string;
  hint: string;
  skipCost: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteWordSubscription = {
  __typename: "Word";
  id: string;
  levelID: string;
  level: {
    __typename: "Level";
    id: string;
    wordDatabaseID: string;
    levelNumber: number;
    createdAt: string;
    updatedAt: string;
  };
  word: string;
  hint: string;
  skipCost: number;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          cognitoId
          username
          gameProgresses {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          cognitoId
          username
          gameProgresses {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          cognitoId
          username
          gameProgresses {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateGameProgress(
    input: CreateGameProgressInput,
    condition?: ModelGameProgressConditionInput
  ): Promise<CreateGameProgressMutation> {
    const statement = `mutation CreateGameProgress($input: CreateGameProgressInput!, $condition: ModelGameProgressConditionInput) {
        createGameProgress(input: $input, condition: $condition) {
          __typename
          id
          userID
          user {
            __typename
            id
            cognitoId
            username
            createdAt
            updatedAt
            owner
          }
          languageCode
          credits
          currentLevel
          unlockedLevels
          wordsCompleted
          wordsSkipped
          currentStreak
          bestStreak
          discoveredWords {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateGameProgressMutation>response.data.createGameProgress;
  }
  async UpdateGameProgress(
    input: UpdateGameProgressInput,
    condition?: ModelGameProgressConditionInput
  ): Promise<UpdateGameProgressMutation> {
    const statement = `mutation UpdateGameProgress($input: UpdateGameProgressInput!, $condition: ModelGameProgressConditionInput) {
        updateGameProgress(input: $input, condition: $condition) {
          __typename
          id
          userID
          user {
            __typename
            id
            cognitoId
            username
            createdAt
            updatedAt
            owner
          }
          languageCode
          credits
          currentLevel
          unlockedLevels
          wordsCompleted
          wordsSkipped
          currentStreak
          bestStreak
          discoveredWords {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateGameProgressMutation>response.data.updateGameProgress;
  }
  async DeleteGameProgress(
    input: DeleteGameProgressInput,
    condition?: ModelGameProgressConditionInput
  ): Promise<DeleteGameProgressMutation> {
    const statement = `mutation DeleteGameProgress($input: DeleteGameProgressInput!, $condition: ModelGameProgressConditionInput) {
        deleteGameProgress(input: $input, condition: $condition) {
          __typename
          id
          userID
          user {
            __typename
            id
            cognitoId
            username
            createdAt
            updatedAt
            owner
          }
          languageCode
          credits
          currentLevel
          unlockedLevels
          wordsCompleted
          wordsSkipped
          currentStreak
          bestStreak
          discoveredWords {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteGameProgressMutation>response.data.deleteGameProgress;
  }
  async CreateDiscoveredWord(
    input: CreateDiscoveredWordInput,
    condition?: ModelDiscoveredWordConditionInput
  ): Promise<CreateDiscoveredWordMutation> {
    const statement = `mutation CreateDiscoveredWord($input: CreateDiscoveredWordInput!, $condition: ModelDiscoveredWordConditionInput) {
        createDiscoveredWord(input: $input, condition: $condition) {
          __typename
          id
          gameProgressID
          gameProgress {
            __typename
            id
            userID
            languageCode
            credits
            currentLevel
            unlockedLevels
            wordsCompleted
            wordsSkipped
            currentStreak
            bestStreak
            createdAt
            updatedAt
            owner
          }
          wordID
          word {
            __typename
            id
            levelID
            word
            hint
            skipCost
            createdAt
            updatedAt
          }
          isDiscovered
          discoveredAt
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDiscoveredWordMutation>response.data.createDiscoveredWord;
  }
  async UpdateDiscoveredWord(
    input: UpdateDiscoveredWordInput,
    condition?: ModelDiscoveredWordConditionInput
  ): Promise<UpdateDiscoveredWordMutation> {
    const statement = `mutation UpdateDiscoveredWord($input: UpdateDiscoveredWordInput!, $condition: ModelDiscoveredWordConditionInput) {
        updateDiscoveredWord(input: $input, condition: $condition) {
          __typename
          id
          gameProgressID
          gameProgress {
            __typename
            id
            userID
            languageCode
            credits
            currentLevel
            unlockedLevels
            wordsCompleted
            wordsSkipped
            currentStreak
            bestStreak
            createdAt
            updatedAt
            owner
          }
          wordID
          word {
            __typename
            id
            levelID
            word
            hint
            skipCost
            createdAt
            updatedAt
          }
          isDiscovered
          discoveredAt
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDiscoveredWordMutation>response.data.updateDiscoveredWord;
  }
  async DeleteDiscoveredWord(
    input: DeleteDiscoveredWordInput,
    condition?: ModelDiscoveredWordConditionInput
  ): Promise<DeleteDiscoveredWordMutation> {
    const statement = `mutation DeleteDiscoveredWord($input: DeleteDiscoveredWordInput!, $condition: ModelDiscoveredWordConditionInput) {
        deleteDiscoveredWord(input: $input, condition: $condition) {
          __typename
          id
          gameProgressID
          gameProgress {
            __typename
            id
            userID
            languageCode
            credits
            currentLevel
            unlockedLevels
            wordsCompleted
            wordsSkipped
            currentStreak
            bestStreak
            createdAt
            updatedAt
            owner
          }
          wordID
          word {
            __typename
            id
            levelID
            word
            hint
            skipCost
            createdAt
            updatedAt
          }
          isDiscovered
          discoveredAt
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDiscoveredWordMutation>response.data.deleteDiscoveredWord;
  }
  async CreateWordDatabase(
    input: CreateWordDatabaseInput,
    condition?: ModelWordDatabaseConditionInput
  ): Promise<CreateWordDatabaseMutation> {
    const statement = `mutation CreateWordDatabase($input: CreateWordDatabaseInput!, $condition: ModelWordDatabaseConditionInput) {
        createWordDatabase(input: $input, condition: $condition) {
          __typename
          id
          languageCode
          levels {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateWordDatabaseMutation>response.data.createWordDatabase;
  }
  async UpdateWordDatabase(
    input: UpdateWordDatabaseInput,
    condition?: ModelWordDatabaseConditionInput
  ): Promise<UpdateWordDatabaseMutation> {
    const statement = `mutation UpdateWordDatabase($input: UpdateWordDatabaseInput!, $condition: ModelWordDatabaseConditionInput) {
        updateWordDatabase(input: $input, condition: $condition) {
          __typename
          id
          languageCode
          levels {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateWordDatabaseMutation>response.data.updateWordDatabase;
  }
  async DeleteWordDatabase(
    input: DeleteWordDatabaseInput,
    condition?: ModelWordDatabaseConditionInput
  ): Promise<DeleteWordDatabaseMutation> {
    const statement = `mutation DeleteWordDatabase($input: DeleteWordDatabaseInput!, $condition: ModelWordDatabaseConditionInput) {
        deleteWordDatabase(input: $input, condition: $condition) {
          __typename
          id
          languageCode
          levels {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteWordDatabaseMutation>response.data.deleteWordDatabase;
  }
  async CreateLevel(
    input: CreateLevelInput,
    condition?: ModelLevelConditionInput
  ): Promise<CreateLevelMutation> {
    const statement = `mutation CreateLevel($input: CreateLevelInput!, $condition: ModelLevelConditionInput) {
        createLevel(input: $input, condition: $condition) {
          __typename
          id
          wordDatabaseID
          wordDatabase {
            __typename
            id
            languageCode
            createdAt
            updatedAt
          }
          levelNumber
          words {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateLevelMutation>response.data.createLevel;
  }
  async UpdateLevel(
    input: UpdateLevelInput,
    condition?: ModelLevelConditionInput
  ): Promise<UpdateLevelMutation> {
    const statement = `mutation UpdateLevel($input: UpdateLevelInput!, $condition: ModelLevelConditionInput) {
        updateLevel(input: $input, condition: $condition) {
          __typename
          id
          wordDatabaseID
          wordDatabase {
            __typename
            id
            languageCode
            createdAt
            updatedAt
          }
          levelNumber
          words {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateLevelMutation>response.data.updateLevel;
  }
  async DeleteLevel(
    input: DeleteLevelInput,
    condition?: ModelLevelConditionInput
  ): Promise<DeleteLevelMutation> {
    const statement = `mutation DeleteLevel($input: DeleteLevelInput!, $condition: ModelLevelConditionInput) {
        deleteLevel(input: $input, condition: $condition) {
          __typename
          id
          wordDatabaseID
          wordDatabase {
            __typename
            id
            languageCode
            createdAt
            updatedAt
          }
          levelNumber
          words {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteLevelMutation>response.data.deleteLevel;
  }
  async CreateWord(
    input: CreateWordInput,
    condition?: ModelWordConditionInput
  ): Promise<CreateWordMutation> {
    const statement = `mutation CreateWord($input: CreateWordInput!, $condition: ModelWordConditionInput) {
        createWord(input: $input, condition: $condition) {
          __typename
          id
          levelID
          level {
            __typename
            id
            wordDatabaseID
            levelNumber
            createdAt
            updatedAt
          }
          word
          hint
          skipCost
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateWordMutation>response.data.createWord;
  }
  async UpdateWord(
    input: UpdateWordInput,
    condition?: ModelWordConditionInput
  ): Promise<UpdateWordMutation> {
    const statement = `mutation UpdateWord($input: UpdateWordInput!, $condition: ModelWordConditionInput) {
        updateWord(input: $input, condition: $condition) {
          __typename
          id
          levelID
          level {
            __typename
            id
            wordDatabaseID
            levelNumber
            createdAt
            updatedAt
          }
          word
          hint
          skipCost
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateWordMutation>response.data.updateWord;
  }
  async DeleteWord(
    input: DeleteWordInput,
    condition?: ModelWordConditionInput
  ): Promise<DeleteWordMutation> {
    const statement = `mutation DeleteWord($input: DeleteWordInput!, $condition: ModelWordConditionInput) {
        deleteWord(input: $input, condition: $condition) {
          __typename
          id
          levelID
          level {
            __typename
            id
            wordDatabaseID
            levelNumber
            createdAt
            updatedAt
          }
          word
          hint
          skipCost
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteWordMutation>response.data.deleteWord;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          cognitoId
          username
          gameProgresses {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    id?: string,
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($id: ID, $filter: ModelUserFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listUsers(
          id: $id
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          sortDirection: $sortDirection
        ) {
          __typename
          items {
            __typename
            id
            cognitoId
            username
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetGameProgress(id: string): Promise<GetGameProgressQuery> {
    const statement = `query GetGameProgress($id: ID!) {
        getGameProgress(id: $id) {
          __typename
          id
          userID
          user {
            __typename
            id
            cognitoId
            username
            createdAt
            updatedAt
            owner
          }
          languageCode
          credits
          currentLevel
          unlockedLevels
          wordsCompleted
          wordsSkipped
          currentStreak
          bestStreak
          discoveredWords {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetGameProgressQuery>response.data.getGameProgress;
  }
  async ListGameProgresses(
    id?: string,
    filter?: ModelGameProgressFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListGameProgressesQuery> {
    const statement = `query ListGameProgresses($id: ID, $filter: ModelGameProgressFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listGameProgresses(
          id: $id
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          sortDirection: $sortDirection
        ) {
          __typename
          items {
            __typename
            id
            userID
            languageCode
            credits
            currentLevel
            unlockedLevels
            wordsCompleted
            wordsSkipped
            currentStreak
            bestStreak
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListGameProgressesQuery>response.data.listGameProgresses;
  }
  async GetDiscoveredWord(id: string): Promise<GetDiscoveredWordQuery> {
    const statement = `query GetDiscoveredWord($id: ID!) {
        getDiscoveredWord(id: $id) {
          __typename
          id
          gameProgressID
          gameProgress {
            __typename
            id
            userID
            languageCode
            credits
            currentLevel
            unlockedLevels
            wordsCompleted
            wordsSkipped
            currentStreak
            bestStreak
            createdAt
            updatedAt
            owner
          }
          wordID
          word {
            __typename
            id
            levelID
            word
            hint
            skipCost
            createdAt
            updatedAt
          }
          isDiscovered
          discoveredAt
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDiscoveredWordQuery>response.data.getDiscoveredWord;
  }
  async ListDiscoveredWords(
    id?: string,
    filter?: ModelDiscoveredWordFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListDiscoveredWordsQuery> {
    const statement = `query ListDiscoveredWords($id: ID, $filter: ModelDiscoveredWordFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listDiscoveredWords(
          id: $id
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          sortDirection: $sortDirection
        ) {
          __typename
          items {
            __typename
            id
            gameProgressID
            wordID
            isDiscovered
            discoveredAt
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDiscoveredWordsQuery>response.data.listDiscoveredWords;
  }
  async UsersByCognitoId(
    cognitoId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<UsersByCognitoIdQuery> {
    const statement = `query UsersByCognitoId($cognitoId: String!, $sortDirection: ModelSortDirection, $filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        usersByCognitoId(
          cognitoId: $cognitoId
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            cognitoId
            username
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      cognitoId
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UsersByCognitoIdQuery>response.data.usersByCognitoId;
  }
  async GameProgressesByUserID(
    userID: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelGameProgressFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GameProgressesByUserIDQuery> {
    const statement = `query GameProgressesByUserID($userID: ID!, $sortDirection: ModelSortDirection, $filter: ModelGameProgressFilterInput, $limit: Int, $nextToken: String) {
        gameProgressesByUserID(
          userID: $userID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            userID
            languageCode
            credits
            currentLevel
            unlockedLevels
            wordsCompleted
            wordsSkipped
            currentStreak
            bestStreak
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userID
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GameProgressesByUserIDQuery>response.data.gameProgressesByUserID;
  }
  async DiscoveredWordsByGameProgressID(
    gameProgressID: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelDiscoveredWordFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<DiscoveredWordsByGameProgressIDQuery> {
    const statement = `query DiscoveredWordsByGameProgressID($gameProgressID: ID!, $sortDirection: ModelSortDirection, $filter: ModelDiscoveredWordFilterInput, $limit: Int, $nextToken: String) {
        discoveredWordsByGameProgressID(
          gameProgressID: $gameProgressID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            gameProgressID
            wordID
            isDiscovered
            discoveredAt
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      gameProgressID
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DiscoveredWordsByGameProgressIDQuery>(
      response.data.discoveredWordsByGameProgressID
    );
  }
  async GetWordDatabase(id: string): Promise<GetWordDatabaseQuery> {
    const statement = `query GetWordDatabase($id: ID!) {
        getWordDatabase(id: $id) {
          __typename
          id
          languageCode
          levels {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetWordDatabaseQuery>response.data.getWordDatabase;
  }
  async ListWordDatabases(
    id?: string,
    filter?: ModelWordDatabaseFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListWordDatabasesQuery> {
    const statement = `query ListWordDatabases($id: ID, $filter: ModelWordDatabaseFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listWordDatabases(
          id: $id
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          sortDirection: $sortDirection
        ) {
          __typename
          items {
            __typename
            id
            languageCode
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListWordDatabasesQuery>response.data.listWordDatabases;
  }
  async GetLevel(id: string): Promise<GetLevelQuery> {
    const statement = `query GetLevel($id: ID!) {
        getLevel(id: $id) {
          __typename
          id
          wordDatabaseID
          wordDatabase {
            __typename
            id
            languageCode
            createdAt
            updatedAt
          }
          levelNumber
          words {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetLevelQuery>response.data.getLevel;
  }
  async ListLevels(
    id?: string,
    filter?: ModelLevelFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListLevelsQuery> {
    const statement = `query ListLevels($id: ID, $filter: ModelLevelFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listLevels(
          id: $id
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          sortDirection: $sortDirection
        ) {
          __typename
          items {
            __typename
            id
            wordDatabaseID
            levelNumber
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListLevelsQuery>response.data.listLevels;
  }
  async LevelsByWordDatabaseID(
    wordDatabaseID: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelLevelFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<LevelsByWordDatabaseIDQuery> {
    const statement = `query LevelsByWordDatabaseID($wordDatabaseID: ID!, $sortDirection: ModelSortDirection, $filter: ModelLevelFilterInput, $limit: Int, $nextToken: String) {
        levelsByWordDatabaseID(
          wordDatabaseID: $wordDatabaseID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            wordDatabaseID
            levelNumber
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      wordDatabaseID
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <LevelsByWordDatabaseIDQuery>response.data.levelsByWordDatabaseID;
  }
  async GetWord(id: string): Promise<GetWordQuery> {
    const statement = `query GetWord($id: ID!) {
        getWord(id: $id) {
          __typename
          id
          levelID
          level {
            __typename
            id
            wordDatabaseID
            levelNumber
            createdAt
            updatedAt
          }
          word
          hint
          skipCost
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetWordQuery>response.data.getWord;
  }
  async ListWords(
    id?: string,
    filter?: ModelWordFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListWordsQuery> {
    const statement = `query ListWords($id: ID, $filter: ModelWordFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listWords(
          id: $id
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          sortDirection: $sortDirection
        ) {
          __typename
          items {
            __typename
            id
            levelID
            word
            hint
            skipCost
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListWordsQuery>response.data.listWords;
  }
  async WordsByLevelID(
    levelID: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelWordFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<WordsByLevelIDQuery> {
    const statement = `query WordsByLevelID($levelID: ID!, $sortDirection: ModelSortDirection, $filter: ModelWordFilterInput, $limit: Int, $nextToken: String) {
        wordsByLevelID(
          levelID: $levelID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            levelID
            word
            hint
            skipCost
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      levelID
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <WordsByLevelIDQuery>response.data.wordsByLevelID;
  }
  OnCreateUserListener(
    filter?: ModelSubscriptionUserFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
  > {
    const statement = `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput, $owner: String) {
        onCreateUser(filter: $filter, owner: $owner) {
          __typename
          id
          cognitoId
          username
          gameProgresses {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as unknown as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
    >;
  }

  OnUpdateUserListener(
    filter?: ModelSubscriptionUserFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
  > {
    const statement = `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput, $owner: String) {
        onUpdateUser(filter: $filter, owner: $owner) {
          __typename
          id
          cognitoId
          username
          gameProgresses {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as unknown as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
    >;
  }


  OnDeleteUserListener(
    filter?: ModelSubscriptionUserFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
  > {
    const statement = `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput, $owner: String) {
        onDeleteUser(filter: $filter, owner: $owner) {
          __typename
          id
          cognitoId
          username
          gameProgresses {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as unknown as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
    >;
  }

  OnCreateGameProgressListener(
    filter?: ModelSubscriptionGameProgressFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateGameProgress">>
  > {
    const statement = `subscription OnCreateGameProgress($filter: ModelSubscriptionGameProgressFilterInput, $owner: String) {
        onCreateGameProgress(filter: $filter, owner: $owner) {
          __typename
          id
          userID
          user {
            __typename
            id
            cognitoId
            username
            createdAt
            updatedAt
            owner
          }
          languageCode
          credits
          currentLevel
          unlockedLevels
          wordsCompleted
          wordsSkipped
          currentStreak
          bestStreak
          discoveredWords {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as unknown as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateGameProgress">
      >
    >;
  }

  OnUpdateGameProgressListener(
    filter?: ModelSubscriptionGameProgressFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateGameProgress">>
  > {
    const statement = `subscription OnUpdateGameProgress($filter: ModelSubscriptionGameProgressFilterInput, $owner: String) {
        onUpdateGameProgress(filter: $filter, owner: $owner) {
          __typename
          id
          userID
          user {
            __typename
            id
            cognitoId
            username
            createdAt
            updatedAt
            owner
          }
          languageCode
          credits
          currentLevel
          unlockedLevels
          wordsCompleted
          wordsSkipped
          currentStreak
          bestStreak
          discoveredWords {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as unknown as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateGameProgress">
      >
    >;
  }

  OnDeleteGameProgressListener(
    filter?: ModelSubscriptionGameProgressFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteGameProgress">>
  > {
    const statement = `subscription OnDeleteGameProgress($filter: ModelSubscriptionGameProgressFilterInput, $owner: String) {
        onDeleteGameProgress(filter: $filter, owner: $owner) {
          __typename
          id
          userID
          user {
            __typename
            id
            cognitoId
            username
            createdAt
            updatedAt
            owner
          }
          languageCode
          credits
          currentLevel
          unlockedLevels
          wordsCompleted
          wordsSkipped
          currentStreak
          bestStreak
          discoveredWords {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as unknown as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteGameProgress">
      >
    >;
  }

  OnCreateDiscoveredWordListener(
    filter?: ModelSubscriptionDiscoveredWordFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateDiscoveredWord">
    >
  > {
    const statement = `subscription OnCreateDiscoveredWord($filter: ModelSubscriptionDiscoveredWordFilterInput, $owner: String) {
        onCreateDiscoveredWord(filter: $filter, owner: $owner) {
          __typename
          id
          gameProgressID
          gameProgress {
            __typename
            id
            userID
            languageCode
            credits
            currentLevel
            unlockedLevels
            wordsCompleted
            wordsSkipped
            currentStreak
            bestStreak
            createdAt
            updatedAt
            owner
          }
          wordID
          word {
            __typename
            id
            levelID
            word
            hint
            skipCost
            createdAt
            updatedAt
          }
          isDiscovered
          discoveredAt
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as unknown as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateDiscoveredWord">
      >
    >;
  }

  OnUpdateDiscoveredWordListener(
    filter?: ModelSubscriptionDiscoveredWordFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateDiscoveredWord">
    >
  > {
    const statement = `subscription OnUpdateDiscoveredWord($filter: ModelSubscriptionDiscoveredWordFilterInput, $owner: String) {
        onUpdateDiscoveredWord(filter: $filter, owner: $owner) {
          __typename
          id
          gameProgressID
          gameProgress {
            __typename
            id
            userID
            languageCode
            credits
            currentLevel
            unlockedLevels
            wordsCompleted
            wordsSkipped
            currentStreak
            bestStreak
            createdAt
            updatedAt
            owner
          }
          wordID
          word {
            __typename
            id
            levelID
            word
            hint
            skipCost
            createdAt
            updatedAt
          }
          isDiscovered
          discoveredAt
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as unknown as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateDiscoveredWord">
      >
    >;
  }

  OnDeleteDiscoveredWordListener(
    filter?: ModelSubscriptionDiscoveredWordFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteDiscoveredWord">
    >
  > {
    const statement = `subscription OnDeleteDiscoveredWord($filter: ModelSubscriptionDiscoveredWordFilterInput, $owner: String) {
        onDeleteDiscoveredWord(filter: $filter, owner: $owner) {
          __typename
          id
          gameProgressID
          gameProgress {
            __typename
            id
            userID
            languageCode
            credits
            currentLevel
            unlockedLevels
            wordsCompleted
            wordsSkipped
            currentStreak
            bestStreak
            createdAt
            updatedAt
            owner
          }
          wordID
          word {
            __typename
            id
            levelID
            word
            hint
            skipCost
            createdAt
            updatedAt
          }
          isDiscovered
          discoveredAt
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as unknown as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteDiscoveredWord">
      >
    >;
  }

  OnCreateWordDatabaseListener(
    filter?: ModelSubscriptionWordDatabaseFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateWordDatabase">>
  > {
    const statement = `subscription OnCreateWordDatabase($filter: ModelSubscriptionWordDatabaseFilterInput) {
        onCreateWordDatabase(filter: $filter) {
          __typename
          id
          languageCode
          levels {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as unknown as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateWordDatabase">
      >
    >;
  }

  OnUpdateWordDatabaseListener(
    filter?: ModelSubscriptionWordDatabaseFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateWordDatabase">>
  > {
    const statement = `subscription OnUpdateWordDatabase($filter: ModelSubscriptionWordDatabaseFilterInput) {
        onUpdateWordDatabase(filter: $filter) {
          __typename
          id
          languageCode
          levels {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as unknown as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateWordDatabase">
      >
    >;
  }

  OnDeleteWordDatabaseListener(
    filter?: ModelSubscriptionWordDatabaseFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteWordDatabase">>
  > {
    const statement = `subscription OnDeleteWordDatabase($filter: ModelSubscriptionWordDatabaseFilterInput) {
        onDeleteWordDatabase(filter: $filter) {
          __typename
          id
          languageCode
          levels {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as unknown as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteWordDatabase">
      >
    >;
  }

  OnCreateLevelListener(
    filter?: ModelSubscriptionLevelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateLevel">>
  > {
    const statement = `subscription OnCreateLevel($filter: ModelSubscriptionLevelFilterInput) {
        onCreateLevel(filter: $filter) {
          __typename
          id
          wordDatabaseID
          wordDatabase {
            __typename
            id
            languageCode
            createdAt
            updatedAt
          }
          levelNumber
          words {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as unknown as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateLevel">>
    >;
  }

  OnUpdateLevelListener(
    filter?: ModelSubscriptionLevelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateLevel">>
  > {
    const statement = `subscription OnUpdateLevel($filter: ModelSubscriptionLevelFilterInput) {
        onUpdateLevel(filter: $filter) {
          __typename
          id
          wordDatabaseID
          wordDatabase {
            __typename
            id
            languageCode
            createdAt
            updatedAt
          }
          levelNumber
          words {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as unknown as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateLevel">>
    >;
  }

  OnDeleteLevelListener(
    filter?: ModelSubscriptionLevelFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteLevel">>
  > {
    const statement = `subscription OnDeleteLevel($filter: ModelSubscriptionLevelFilterInput) {
        onDeleteLevel(filter: $filter) {
          __typename
          id
          wordDatabaseID
          wordDatabase {
            __typename
            id
            languageCode
            createdAt
            updatedAt
          }
          levelNumber
          words {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as unknown as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteLevel">>
    >;
  }

  OnCreateWordListener(
    filter?: ModelSubscriptionWordFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateWord">>
  > {
    const statement = `subscription OnCreateWord($filter: ModelSubscriptionWordFilterInput) {
        onCreateWord(filter: $filter) {
          __typename
          id
          levelID
          level {
            __typename
            id
            wordDatabaseID
            levelNumber
            createdAt
            updatedAt
          }
          word
          hint
          skipCost
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as unknown as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateWord">>
    >;
  }

  OnUpdateWordListener(
    filter?: ModelSubscriptionWordFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateWord">>
  > {
    const statement = `subscription OnUpdateWord($filter: ModelSubscriptionWordFilterInput) {
        onUpdateWord(filter: $filter) {
          __typename
          id
          levelID
          level {
            __typename
            id
            wordDatabaseID
            levelNumber
            createdAt
            updatedAt
          }
          word
          hint
          skipCost
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as unknown as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateWord">>
    >;
  }

  OnDeleteWordListener(
    filter?: ModelSubscriptionWordFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteWord">>
  > {
    const statement = `subscription OnDeleteWord($filter: ModelSubscriptionWordFilterInput) {
        onDeleteWord(filter: $filter) {
          __typename
          id
          levelID
          level {
            __typename
            id
            wordDatabaseID
            levelNumber
            createdAt
            updatedAt
          }
          word
          hint
          skipCost
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as unknown as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteWord">>
    >;
  }
}
