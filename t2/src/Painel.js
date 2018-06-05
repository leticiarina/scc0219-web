import React from 'react';
import { Agenda }  from './Agenda';
import { NovoServico }  from './NovoServico';
import { Compras, NovaCompra }  from './Compras'; 
import { Mensagens } from './Mensagens';
import { Switch, Route, NavLink } from 'react-router-dom';

function Painel(){

	var user = JSON.parse(localStorage.getItem("user"));
	var admin = JSON.parse(localStorage.getItem("admin"));

	if(!user.logged && !admin.logged){
		return(
			<div>
				Usuário não logado. Faça o login para continuar.
			</div>
		);
	} else if(user.logged) {
		return(	
			<div className="row m-0 border border-white">
				<LateralUserMenu/>
				<div className="col p-2 md-5 bg-light-green border border-white">
				<Switch>

			  		<Route exact path="/painel/agenda" component={Agenda}/>
			  		<Route path="/painel/agenda/novo" component={NovoServico}/>
			  		<Route exact path="/painel/compras" component={Compras}/>
			  		<Route path="/painel/compras/novo" component={NovaCompra}/>
				</Switch>
				</div>
			</div>
		);
	} else {
		return(	
			<div className="row m-0 border border-white">
				<LateralAdminMenu/>
				<div className="col p-2 md-5 bg-light-green border border-white">
				<Switch>
			  		<Route exact path="/painel/mensagens" component={Mensagens}/>
				</Switch>
				</div>
			</div>
		);		
	}
}

const LateralUserMenu = () => (
  <div className="sidebar-menu col-2 p-2 md-5">
    <div className="nav flex-column" role="tablist" aria-orientation="vertical">
      <NavLink to="/painel/compras">Compras</NavLink>
      <NavLink to="/painel/agenda">Agenda</NavLink>
      <NavLink to="">Perfil</NavLink>
    </div>
  </div>
);

const LateralAdminMenu = () => (
  <div className="sidebar-menu col-2 p-2 md-5">
    <div className="nav flex-column" role="tablist" aria-orientation="vertical">
      <NavLink to="/painel/gerenciar-produtos">Gerenciar Produtos</NavLink>
      <NavLink to="/painel/mensagens">Mensagens</NavLink>
    </div>
  </div>
);


export default Painel;
