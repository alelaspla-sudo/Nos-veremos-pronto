// =========================
// FECHAS DEL VIAJE
// =========================

const startDate =
    new Date("2026-09-14T00:00:00Z");

const endDate =
    new Date("2027-02-15T00:30:00Z");


// =========================
// FECHA ACTUAL DE ECUADOR
// =========================

const ecuadorTime =
    new Intl.DateTimeFormat(
        "en-CA",
        {
            timeZone: "America/Guayaquil",
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        }
    ).format(
        new Date()
    );


const today =
    new Date(
        `${ecuadorTime}T00:00:00Z`
    );


// =========================
// CÁLCULO DEL CONTADOR
// =========================

const millisecondsPerDay =
    1000 * 60 * 60 * 24;


// Días transcurridos desde que te vas.

const elapsedDays =
    Math.floor(
        (today - startDate) /
        millisecondsPerDay
    );


// Día del proyecto.

let day =
    elapsedDays + 1;


// =========================
// ANTES DEL VIAJE
// =========================


if (day < 1) {

    day = 1;

}


// =========================
// CONTADOR
// =========================

let remainingDays =
    Math.ceil(
        (endDate - startDate) /
        millisecondsPerDay
    );



if (today >= startDate) {

    remainingDays =
        Math.ceil(
            (endDate - today) /
            millisecondsPerDay
        );

}

if (remainingDays < 0) {

    remainingDays = 0;

}

// =========================
// ELEMENTOS
// =========================

const turntable =
    document.getElementById("turntable");

const dayCounter =
    document.getElementById("day-counter");

const countdown =
    document.getElementById("countdown");

const recordPlayerMode =
    document.getElementById("record-player-mode");

const vinyl =
    document.getElementById("vinyl");

const charlie =
    document.getElementById("charlie");

const perro =
    document.getElementById("perro");

const roca =
    document.getElementById("roca");

const fideos =
    document.getElementById("fideos");

const camara =
    document.getElementById("camara");

const playerSongTitle =
    document.getElementById("player-song-title");

const playerSongArtist =
    document.getElementById("player-song-artist");


// ========================
// MENSAJES
// ========================


const messageOverlay =
    document.getElementById("message-overlay");

const postItText =
    document.getElementById("post-it-text");

const letterText =
    document.getElementById("letter-text");


// ========================
// CHARLIE
// ========================

charlie.addEventListener(
    "click",
    function () {

        // Por ahora:
        // todos los días normales → Post-it
        // los días especiales → Carta

        if (
            mensajesEspeciales[
                obtenerFechaActual()
            ]
        ) {

            mostrarCartaEspecial(
                mensajesEspeciales[
                    obtenerFechaActual()
                ]
            );

        } else {

            mostrarPostIt(
                "Te extraño, amor."
            );

        }

    }
);


// ========================
// FIDEOS
// ========================

fideos.addEventListener(
    "click",
    function () {

        mostrarPostIt(
            "Te prometo intentar comer tu receta de fideo con queso crema mañana (leer cada día)."
        );

    }
);


// ========================
// PERRO
// ========================

const mensajesPerro = [

    "Te amo cielo",

    "Prontito nos veremos!!",

    "No me conocia perro, pero GUAU! que bello eres",

    "Oye, me encantas"

];


perro.addEventListener(
    "click",
    function () {

        const indice =
            Math.floor(
                Math.random() *
                mensajesPerro.length
            );

        mostrarPostIt(
            mensajesPerro[indice]
        );

    }
);






// =========================
// ROCA
// =========================


// ========================
// CAMARA
// ========================

camara.addEventListener(
    "click",
    function () {

        console.log(
            "¡Camara fue tocado!"
        );

    }
);


// ==================================================
// PLANTILLA DE MENSAJES ESPECIALES
// ==================================================
//


const mensajesEspeciales = {

    // ME VOY

    
        "2026-09-14": "Una de las cosas que más he pensado desde agosto es qué pasaría con nosotros si me voy.\n\nNo porque tuviera algún sentimiento feo ni algún tipo de desconfianza, sino porque me preocupaba que cambiara algo entre nosotros.\n\nMientras más se acercaba la fecha de mi viaje, decidí ignorar eso (claro, a veces me daba el gadejo y solo te lo decía, sorry about that), pero recuerdo estar acostaditos en mi cama el martes y pensar \"vamos a estar bien\".\n\nClaro que será un poco complicado al inicio, después de todo te volviste parte de mi rutina, de mi día. Ahora cambiaremos de rutina, pero no de amor.\n\nTú mismo lo dijiste, la fuerza es mucho más grande que la distancia entre nosotros y creo que si logramos superar esto (sí lo haremos) no habrá nada que no podamos sobrellevar después.\n\nEres el amor de mi vida Pancho, te extrañaré por montones.\n\nExtrañaré tus abrazos, tus besos, tus bailes. Cómo huele tu cuarto, cómo se siente tu pelito o tu carita después de que te rasuras.\n\nVoy a extrañar cantar contigo, sentarnos en tu cuarto a tomar y reír, el acostarnos a ver videítos juntos y reírnos de cualquier cosa a la que dices \"Yo\".\n\nQuiero que jamás olvides ni dudes lo mucho que te amo, que te extrañaré y te pensaré. Estoy segura de que cada cosa linda que vea me recordará a ti e intentaré comprarte tres mil regalos.\n\nYa verás lo rápido que pasa el tiempo y que sooner than later vamos a estar otra vez armando rompecabezas y gastándonos la plata en comida.\n\nEsto es para ti, como te dije en el video, quiero que tengas una razón para sonreír cada día, algo que te recuerde que alguien por el otro lado del océano te ama mucho mucho.\n\nSuerte en estos días, te mando un abrazo y un beso.\n\nDesde ya te extraño.\n\nCon mucho mucho amor,\nAle.",

    

    // Flores amarillas

        "2026-09-21": "Hace cientos de millones de años, culturas antiguas como los fenicipinenses consideraban que regalar una flor a una persona que amas significaba unir un lazo eterno. De igual forma, años después los rominicences tenían una tradición de regalar autos de juguete después del solsticio, se hacía únicamente hacia personas especiales dado que requería esfuerzo tallarlos en piedra.\n\nLo interesante de esta historia es que, claramente no es cierta, pero tu jamás serás “espectador”.\n\nHay una escena muy bonita de una serie que me gusta y siempre he querido que veamos juntos. En Gilmore Girls a Lorelai, una de las protagonistas, su novio la sorprende regalándole 1000 margaritas amarillas. Para ella el gesto de romance más grande y su “dreamed proposal” eran esas “one-thosand yellow daisies”.\n\nCreo que tú eres la única persona que me daría un millón de margaritas si te digo que me gustan, y que sin duda me hubiera encantado pasar este día contigo. Si bien no puedo estar contigo ahora mismo, nunca te faltarán las flores, los besos y el amor.\n\nDe lo que he notado no te encantan los autos hotwheels y la verdad no se de donde salió eso que a los niños se les da autitos en esta época del año. ¿Qué si te gusta? Los “bleibleis”. Me aseguré que sean los chéveres que te gustan, espero haber tenido éxito en mi misión.\n\nTe amo cielo! Feliz día de las flores amarillas (y felices 6 meses por adelantado)\n\nP.D: La canción de hoy iba a ser Flores amarillas de Floricienta pero me pareció un poco lame así que la cambie por una mucho mejor. ", 


        "2026-09-22": "Hoy cumplimos seis meses. Seis meses desde que decidimos empezar esto juntos y, honestamente, todavía me parece un poco increíble pensar en todo lo que ha pasado desde entonces.\n\nMe gusta pensar en \"honeybee\" porque habla de querer algo que sabes que es precioso y, precisamente por eso, tener miedo de perderlo. Y creo que eso se parece un poquito a lo que siento por nosotros. No porque piense que algo vaya a salir mal, sino porque eres alguien que quiero muchísimo y porque me importa todo lo que hemos construido juntos.\n\nEn estos seis meses hemos tenido rompecabezas, comidas, conversaciones completamente absurdas, videítos, bailes, canciones, tardes en tu cuarto y un montón de momentos que probablemente desde afuera no parecen importantes, pero que para mí significan muchísimo.\n\nVoy a extrañar todas esas cosas mientras esté lejos. Voy a extrañar tus abrazos, tus besos, cómo hueles, cómo se siente tu pelito y tu carita después de que te rasuras. Voy a extrañar cantar contigo, acostarnos a ver videítos, reírnos de cualquier cosa y que digas \"yo\" cuando algo te representa demasiado.\n\nPero también me gusta pensar que todavía nos falta muchísimo por vivir. Todavía quiero conocer más versiones de ti, descubrir nuevas cosas que nos hagan reír, aprender cómo somos juntos en cada etapa y seguir construyendo una vida llena de esas pequeñas cosas que terminan siendo las más importantes.\n\nSé que ahora estamos lejos y que no es exactamente como me gustaría pasar nuestros seis meses. Preferiría estar contigo, abrazarte, comer algo juntos y probablemente gastar plata en alguna comida que no necesitábamos. Pero incluso desde aquí quiero que sepas que sigo eligiéndote. Que la distancia no cambió lo que siento por ti y que sigo teniendo muchísimas ganas de volver a nuestra vida juntos.\n\nGracias por estos seis meses, Pancho. Gracias por ser tú, por quererme, por hacerme reír y por convertir tantos días normales en recuerdos que quiero guardar para siempre.\n\nTe amo muchísimo. Y aunque hoy estemos a kilómetros de distancia, sigo sintiendo que eres mi lugar favorito.\n\nFeliz seis meses, amor.\n\nCon muchísimo amor,\nAle.",

};



// ==================================================
// OBTENER FECHA ACTUAL
// ==================================================

function obtenerFechaActual() {

    const year =
        today.getUTCFullYear();

    const month =
        String(
            today.getUTCMonth() + 1
        ).padStart(2, "0");

    const date =
        String(
            today.getUTCDate()
        ).padStart(2, "0");

    return `${year}-${month}-${date}`;

}


// ==================================================
// MOSTRAR POST IT
// ==================================================

function mostrarPostIt(mensaje) {

    // Limpiar cualquier animación anterior

    messageOverlay.classList.remove(
        "envelope-active"
    );

    messageOverlay.classList.remove(
        "letter-coming-active"
    );

    messageOverlay.classList.remove(
        "letter-active"
    );


    // Poner el mensaje

    postItText.textContent =
        mensaje;


    // Activar blur

    messageOverlay.classList.add(
        "active"
    );


    // Mostrar Post-it

    messageOverlay.classList.add(
        "post-it-active"
    );

}


// ==================================================
// MOSTRAR CARTA ESPECIAL
// ==================================================

function mostrarCartaEspecial(mensaje) {

    // Limpiar estados anteriores

    messageOverlay.classList.remove(
        "post-it-active"
    );

    messageOverlay.classList.remove(
        "letter-coming-active"
    );

    messageOverlay.classList.remove(
        "letter-active"
    );


    // Poner mensaje

    letterText.textContent =
        mensaje;


    // Activar blur

    messageOverlay.classList.add(
        "active"
    );


    // ==============================
    // 1. APARECE EL SOBRE
    // ==============================

    messageOverlay.classList.add(
        "envelope-active"
    );


    // ==============================
    // 2. CARTA SALE DEL SOBRE
    // ==============================

    setTimeout(
        function () {

            messageOverlay.classList.remove(
                "envelope-active"
            );

            messageOverlay.classList.add(
                "letter-coming-active"
            );


        },
        1200
    );


    // ==============================
    // 3. APARECE LA CARTA SOLA
    // ==============================

    setTimeout(
        function () {

            messageOverlay.classList.remove(
                "letter-coming-active"
            );

            messageOverlay.classList.add(
                "letter-active"
            );


        },
        2400
    );

}

// =========================
// ESC PARA CERRAR MENSAJES
// =========================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            messageOverlay.classList.contains("active")
        ) {

            messageOverlay.classList.remove("active");
            messageOverlay.classList.remove("post-it-active");
            messageOverlay.classList.remove("envelope-active");
            messageOverlay.classList.remove("letter-coming-active");
            messageOverlay.classList.remove("letter-active");

        }

    }
);


// =========================
// VARIABLES DEL TOCADISCOS
// =========================

let isPlaying =
    false;

let audio =
    null;


// =========================
// ABRIR TOCADISCOS
// =========================

turntable.addEventListener(
    "click",
    function () {

        if (isPlaying) {

            return;

        }


        isPlaying =
            true;


        // Limpiar estados anteriores

        recordPlayerMode.classList.remove(
            "player-disappearing"
        );

        recordPlayerMode.classList.remove(
            "vinyl-visible"
        );

        recordPlayerMode.classList.remove(
            "show-song"
        );

        vinyl.classList.remove(
            "playing"
        );


        // Abrir escena

        recordPlayerMode.classList.add(
            "active"
        );


        // =========================
        // CANCIÓN DEL DÍA
        // =========================

        const songIndex =
            (day - 1) %
            songs.length;

        const song =
            songs[songIndex];


        playerSongTitle.textContent =
            song.title;

        playerSongArtist.textContent =
            song.artist;


        // =========================
        // TOCADISCOS FLOTANDO
        // =========================

        setTimeout(
            function () {

                recordPlayerMode.classList.add(
                    "player-disappearing"
                );


                // =========================
                // DESPUÉS DEL TOCADISCOS
                // =========================

                setTimeout(
                    function () {

                        recordPlayerMode.classList.add(
                            "vinyl-visible"
                        );


                        // Gira

                        vinyl.classList.add(
                            "playing"
                        );


                        // Mostrar canción

                        recordPlayerMode.classList.add(
                            "show-song"
                        );


                        // =========================
                        // MÚSICA
                        // =========================

                        audio =
                            new Audio(
                                song.archivo
                            );


                        audio.volume =
                            0.7;


                        audio.play()
                            .catch(
                                function (error) {

                                    console.log(
                                        "No se pudo reproducir el audio:",
                                        error
                                    );

                                }
                            );

                    },
                    700
                );

            },
            1800
        );

    }
);


// =========================
// ESC PARA VOLVER
// =========================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeRecordPlayer();

        }

    }
);


// =========================
// CERRAR TOCADISCOS
// =========================

function closeRecordPlayer() {

    if (!isPlaying) {

        return;

    }


    // Detener audio

    if (audio) {

        audio.pause();

        audio.currentTime =
            0;

        audio = null;

    }


    // Detener vinilo

    vinyl.classList.remove(
        "playing"
    );


    // Ocultar canción

    recordPlayerMode.classList.remove(
        "show-song"
    );


    // Ocultar vinilo

    recordPlayerMode.classList.remove(
        "vinyl-visible"
    );


    // Limpiar animación

    recordPlayerMode.classList.remove(
        "player-disappearing"
    );


    // Cerrar escena

    recordPlayerMode.classList.remove(
        "active"
    );


    // Listo para volver a abrir

    isPlaying =
        false;

}

//ACTUALIZACION
// =========================
// INICIAR
// =========================

function loadDay() {

    dayCounter.textContent =
        `Día ${day}`;

    countdown.textContent =
        `${remainingDays} días para vernos`;

}

loadDay();




