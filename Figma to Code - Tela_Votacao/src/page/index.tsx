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
      <div className="horizontal-card">
        <div className="content">
          <div className="content-2">
            <div className="avatar">
              <div className="background" />
              <span className="initial">A</span>
            </div>
            <div className="text">
              <span className="header">Tópico da votação</span>
              <span className="subhead">Breve descrição</span>
            </div>
          </div>
        </div>
        <div className="background-3">
          <div className="state-layer" />
        </div>
      </div>
      <div className="list">
        <div className="list-item">
          <div className="state-layer-overlay" />
          <div className="state-layer-4">
            <div className="leading-element">
              <div className="building-blocks-image-thumbnail">
                <div className="thumbnail" />
              </div>
            </div>
            <div className="content-5">
              <span className="option-1">Opção 1</span>
            </div>
            <div className="trailing-element">
              <span className="trailing-supporting-text">70%</span>
              <div className="checkboxes">
                <div className="state-layer-6">
                  <div className="check-small" />
                  <div className="container" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="list-item-7">
          <div className="state-overlay" />
          <div className="state-layer-8">
            <div className="leading-element-9">
              <div className="image-thumbnail">
                <div className="thumbnail-a" />
              </div>
            </div>
            <div className="content-b">
              <span className="headline">Opção 2</span>
            </div>
            <div className="trailing-element-c">
              <span className="trailing-supporting-text-d">20%</span>
              <div className="checkboxes-e">
                <div className="state-layer-f">
                  <div className="check-small-10" />
                  <div className="container-11" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="list-item-12">
          <div className="state-overlay-13" />
          <div className="state-layer-14">
            <div className="leading-element-15">
              <div className="building-blocks-image-thumbnail-16">
                <div className="thumbnail-17" />
              </div>
            </div>
            <div className="content-18">
              <span className="headline-19">Opção 3</span>
            </div>
            <div className="trailing-element-1a">
              <span className="trailing-supporting-text-1b">10%</span>
              <div className="checkboxes-1c">
                <div className="state-layer-1d">
                  <div className="check-small-1e" />
                  <div className="container-1f" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle">
        <span className="data-inicio">Data_Início</span>
        <span className="data-fim">Data_Fim</span>
        <span className="ate">Até</span>
      </div>
      <div className="navigation-bar">
        <div className="nav-item">
          <div className="icon-container">
            <div className="state-layer-20">
              <div className="list-21" />
            </div>
          </div>
          <span className="label-text">Lista de compras</span>
        </div>
        <div className="nav-item-22">
          <div className="icon-container-23">
            <div className="state-layer-24">
              <div className="icon" />
            </div>
          </div>
          <span className="label-text-25">Estoque</span>
        </div>
        <div className="nav-item-26">
          <div className="icon-container-27">
            <div className="state-layer-28">
              <div className="icon-29" />
            </div>
          </div>
          <span className="label-text-2a">Cronograma</span>
        </div>
        <div className="nav-item-2b">
          <div className="icon-container-2c">
            <div className="state-layer-2d">
              <div className="icon-2e" />
            </div>
          </div>
          <span className="label-text-2f">Votação</span>
        </div>
      </div>
    </div>
  );
}
