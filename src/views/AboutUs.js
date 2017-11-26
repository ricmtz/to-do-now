import React, { Component } from 'react';

const styles = {
    content: {
        'padding': '100px 15% 150px'
    },
    inf_container: {
        'padding':'50px'
    },
    header: {
        'border-bottom': '1px solid black'
    },
    paragraph: {
        'font-size': '12',
        'text-align': 'justify'
    }
};

class AboutUs extends Component{
    render(){
        return(
            <div>
                <div style={styles.content}>
                    <h1 style={styles.header}>Acerca de nosostros.</h1>
                    <h2>Origen</h2>
                    <p style={styles.paragraph}>
                        To Do Now es un proyecto que nace de la espiracion de ayudar a mejorar la gestion
                        de proyectos escolares, de manera eficiente y de forma mas social.
                    </p>
                    <h2>Objetivo</h2>
                    <p style={styles.paragraph}>
                        To Do Now es un projecto que busca ayudar en la gestion y automatizacion de
                        la distribucion en grupos de trabajo de manera eficiente y mas social, permitiendo
                        tener conociemineto mas a fondo de los usuarios en los grupos de trabajo que se
                        tienen en comun.
                    </p>
                </div>
            </div>
        );
    }
}

export default AboutUs;
