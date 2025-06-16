import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container">
      <div className="frame">
        <div className="time">
          <span className="time-1">9:41</span>
        </div>
        <div className="dynamic-island-spacer" />
        <div className="levels">
          <div className="cellular-connection" />
          <div className="wifi" />
          <div className="battery" />
        </div>
      </div>
      <div className="menu-lateral" />
      <div className="pfnkur">
        <div className="rectangle">
          <span className="louca">Louça</span>
          <span className="gabriel">Samuel</span>
        </div>
        <div className="rectangle-2">
          <span className="louca-3">Louça</span>
          <span className="gabriel-4">Gabriel</span>
        </div>
        <div className="rectangle-5">
          <span className="louca-6">Louça</span>
          <span className="gabriel-7">Miguel</span>
        </div>
      </div>
      <div className="extended-fab">
        <div className="state-layer">
          <div className="icon" />
          <span className="nova-tarefa">Nova Tarefa</span>
        </div>
      </div>
      <div className="navigation-bar">
        <div className="nav-item">
          <div className="icon-container">
            <div className="state-layer-8">
              <div className="list" />
            </div>
          </div>
          <span className="label-text">Lista de compras</span>
        </div>
        <div className="nav-item-9">
          <div className="icon-container-a">
            <div className="state-layer-b">
              <div className="icon-c" />
            </div>
          </div>
          <span className="label-text-d">Estoque</span>
        </div>
        <div className="nav-item-e">
          <div className="icon-container-f">
            <div className="state-layer-10">
              <div className="icon-11" />
            </div>
          </div>
          <span className="label-text-12">Cronograma</span>
        </div>
        <div className="nav-item-13">
          <div className="icon-container-14">
            <div className="state-layer-15">
              <div className="icon-16" />
            </div>
          </div>
          <span className="label-text-17">Votação</span>
        </div>
      </div>
    </div>
  );
}
