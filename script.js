//preguntamos que tema usa el usuario, si dark o light
const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('slider');
const boton = document.getElementById('boton');
// esta funcion impacta sobre el html y le agrega el theme-dark o theme-light
// agregaromos al localstorage el tema que el usuario eligio
const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// dandole funcionaldiad al slider con un evento
// obtenemos del local storage el theme y pasamos al contrario al registrar el evento
    slider.addEventListener('click', () => {
            let switchTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            setTheme(switchTheme);
    });

    // mismo evento pero con el boton de abajo 

    boton.addEventListener('click', () => {
        let switchTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        setTheme(switchTheme);
    });

// tiene ya una preferencia guardada en el localstorage? 
setTheme(localStorage.getItem('theme') || preferedColorScheme);