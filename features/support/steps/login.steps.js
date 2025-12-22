// import { Given, When, Then } from '@cucumber/cucumber'
import { chromium } from 'playwright'
import LoginPage from '../pages/LoginPage.js'
import InventoryPage from '../pages/InventoryPage.js'

let browser, context, page
let loginPage, inventoryPage