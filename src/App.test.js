import { render, screen } from '@testing-library/react';
import App, {getDefaultLang, cookie} from './App';

test('default language should be "en" ', () => {
  expect(getDefaultLang()).toMatch("en")
});
test('language should be "fr" when cookie is "fr" ', () => {
  cookie.set("lang", "fr", {
    path: '/', // maxAge: 60 * 60 * 24 * 7,
    sameSite: 'lax'
})
  expect(getDefaultLang()).toMatch("fr")
});
test('language should be "en" if cookie lang is a language not setted', () => {
  cookie.set("lang", "es", {
    path: '/', // maxAge: 60 * 60 * 24 * 7,
    sameSite: 'lax'
})
  expect(getDefaultLang()).toMatch("en")
});