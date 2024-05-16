describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');//зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru');//ввели правильный логин
         cy.get('#pass').type('iLoveqastudio1');//ввели правильный пароль
         cy.get('#loginButton').click();//нажал войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно');//проверя текст
         cy.get('#messageHeader').should('be.visible');// виден
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть и виден
     })

     it('логика восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');//зашли на сайт
        cy.get('#forgotEmailButton').click()
        cy.get('#mailForgot').type('german@dolnikov.ru');//ввели правильный логин
        cy.get('#restoreEmailButton').click()

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');//проверя текст
        cy.get('#messageHeader').should('be.visible');// виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть и виден
    })

    it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');//зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru');//ввели правильный логин
        cy.get('#pass').type('iLoveqastudio2');//ввели правильный пароль
        cy.get('#loginButton').click();//нажал войти

        cy.get('#message').contains('Такого логина или пароля нет');//проверя текст
        cy.get('#message').should('be.visible');// виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть и виден
    })

    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/');//зашли на сайт
        cy.get('#mail').type('2@dolnikov.ru');//ввели правильный логин
        cy.get('#pass').type('iLoveqastudio1');//ввели правильный пароль
        cy.get('#loginButton').click();//нажал войти

        cy.get('#message').contains('Такого логина или пароля нет');//проверя текст
        cy.get('#message').should('be.visible');// виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть и виден
    })

    it('Валидация', function () {
        cy.visit('https://login.qa.studio/');//зашли на сайт
        cy.get('#mail').type('germandolnikov.ru');//без @
        cy.get('#pass').type('iLoveqastudio1');//ввели правильный пароль
        cy.get('#loginButton').click();//нажал войти
        
        cy.get('#message').contains('Нужно исправить проблему валидации');//проверя текст
        cy.get('#message').should('be.visible');// виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть и виден
    })

    it('приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');//зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru');//ввели правильный логин
        cy.get('#pass').type('iLoveqastudio1');//ввели правильный пароль
        cy.get('#loginButton').click();//нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно');//проверя текст
        cy.get('#messageHeader').should('be.visible');// виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//есть и виден
    })
    
 }) 