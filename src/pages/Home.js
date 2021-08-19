import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {

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
				<section id="two" class="wrapper style1 special">
				<div class="inner">
					<header>
					<h2>"Que a Força esteja com você"</h2>
					</header>
					<p>A citação foi reformulada em homenagem ao dia oficial de "Star Wars", 
						o 4 de maio: "May the Fourth be with you". A saudação é repetida pelas personagens o tempo todo. 
						Afinal de contas, sem a Força, a "Guerra nas Estralas" não seria o que é.</p>
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