#!/usr/bin/env node
import engine from '../src/index.js';
import { rule, game } from '../src/games/gcd.js';

engine(rule, game);
