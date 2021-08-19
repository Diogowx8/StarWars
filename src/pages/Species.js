import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../services/api';

export default function Species() {

	const [species, setSpecies] = useState([])
		
	useEffect (() =>{
		const getSpecies = async () => {
			const resposta = await api.get('/species/')
			console.log(resposta.data.results)
			setSpecies(resposta.data.results)
		}

		getSpecies()
		console.log(species)
	},[])

    return(

        <>
		<header id="header">
			<div className="inner">
				<nav id="nav">
                    <Link to = "/"> Home </Link>
                    <Link to = "/films"> Films </Link>
                    <Link to = "/starships"> Starships </Link>
					<Link to = "/people"> People </Link>
					<Link to = "/planets"> Planets </Link>
                    <Link to = "/species"> Species </Link>
					<Link to = "/login"> Login </Link>
				</nav>
				<a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
			</div>
			</header>
				<section id="banner">
					<h1>Star Wars</h1>
				</section>
				<section id="two" className="wrapper style1 special">
					<div className="inner">
						<header>
							<h2>Species</h2>
						</header>
						{species.map((specie) =>
							<div>
								{specie.name}
							</div>
						)}
					</div>
				</section>
				<section id="one" className="wrapper">
					<div className="inner">
						<div className="flex flex-3">
							<article>
								<header>
									<h3>Diogo Costa Volpato<br /></h3>
									<p>Criador do site Star Wars, desenvolvido para compor nota G1 da matéria Tópicos Especiais em Programação</p>
								</header>
							</article>
							<article>
								<header>
									<h3>IMED<br /></h3>
								</header>
								<p>Ciência da Computação</p>
							</article>
							<article>
								<header>
									<h3>Contato<br /></h3>
								</header>
								<p>E-mail: diogo.v00@hotmail.com</p>
								<p>Whatsapp: (55) 54 98446-3893</p>
							</article>
						</div>
					</div>
				</section>
	    </>

    )

}