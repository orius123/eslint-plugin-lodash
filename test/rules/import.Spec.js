import eslint from 'eslint';
import 'babel-eslint';
import rule from '../../src/rules/import';

const ruleTester = new eslint.RuleTester();

ruleTester.run('lodash/import', rule, {
  valid: [
    {
      code: 'import "something"',
      parser: 'babel-eslint'
    },
    {
      code: 'import something from "something"',
      parser: 'babel-eslint'
    },
    {
      code: 'import lodash from "something"',
      parser: 'babel-eslint'
    },
    {
      code: 'import { something } from "something"',
      parser: 'babel-eslint'
    },

    {
      code: 'import { something, other } from "something"',
      parser: 'babel-eslint'
    },
    {
      code: 'import { default as other } from "something"',
      parser: 'babel-eslint'
    },
    {
      code: 'import find from "lodash/collection/find"',
      parser: 'babel-eslint'
    },
    {
      code: 'import { something } from "lodash"',
      parser: 'babel-eslint'
    },
    {
      code: 'import { default as other } from "lodash"',
      parser: 'babel-eslint'
    }
  ],
  invalid: [
    {
      code: 'import "lodash"',
      parser: 'babel-eslint',
      errors: [{
        message: 'Importing the entire lodash library is not permitted, please import the specific functions you need'
      }]
    },
    {
      code: 'import "lodash-compat"',
      parser: 'babel-eslint',
      errors: [{
        message: 'Importing the entire lodash library is not permitted, please import the specific functions you need'
      }]
    },
    {
      code: 'import _ from "lodash"',
      parser: 'babel-eslint',
      errors: [{
        message: 'Importing the entire lodash library is not permitted, please import the specific functions you need'
      }]
    },
    {
      code: 'import lodash from "lodash"',
      parser: 'babel-eslint',
      errors: [{
        message: 'Importing the entire lodash library is not permitted, please import the specific functions you need'
      }]
    },
    {
      code: 'import { other, isArray } from "lodash"',
      parser: 'babel-eslint',
      errors: [{
        message: 'Importing lodash isArray is not recommended use Array.isArray instead'
      }]
    },
    {
      code: 'import { isArray, other } from "lodash"',
      parser: 'babel-eslint',
      errors: [{
        message: 'Importing lodash isArray is not recommended use Array.isArray instead'
      }]
    },
    {
      code: 'import { isArray } from "lodash"',
      parser: 'babel-eslint',
      errors: [{
        message: 'Importing lodash isArray is not recommended use Array.isArray instead'
      }]
    },
    {
      code: 'import isArray from "lodash/isArray"',
      parser: 'babel-eslint',
      errors: [{
        message: 'Importing lodash isArray is not recommended use Array.isArray instead'
      }]
    },
    {
      code: 'import { default as other } from "lodash/isArray"',
      parser: 'babel-eslint',
      errors: [{
        message: 'Importing lodash isArray is not recommended use Array.isArray instead'
      }]
    },
    {
      code: 'import differentName from "lodash/isArray"',
      parser: 'babel-eslint',
      errors: [{
        message: 'Importing lodash isArray is not recommended use Array.isArray instead'
      }]
    }
  ]
});
