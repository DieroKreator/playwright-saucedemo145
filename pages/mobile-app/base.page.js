export default class BasePage {
    async scrollUp(scroll) {
        const START_Y = 1850;
        const END_Y = 100;
        const X_COORD = 500;

        for (let i = 0; i < rolagem; i++) {

            // Usamos a API 'performActions' (W3C) de forma simplificada
            await driver.performActions([
                {
                    type: 'pointer',
                    id: 'finger1',
                    parameters: { pointerType: 'touch' },
                    actions: [
                        { type: 'pointerMove', duration: 0, x: X_COORD, y: START_Y }, // Inicia
                        { type: 'pointerDown', button: 0 },                       // Pressiona
                        { type: 'pause', duration: 500 },                         // Espera
                        { type: 'pointerMove', duration: 1000, x: X_COORD, y: END_Y }, // Move (arrasta)
                        { type: 'pointerUp', button: 0 }                          // Solta
                    ]
                }
            ]);
            await driver.pause(2000);
        }
    }
}