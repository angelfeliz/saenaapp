import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import HeadPage from './HeadPage';

class CalcISR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingresoBruto: '',
      deducibles: '',
      impLiquidado: '',
      efecTributacion: '',
      antiGenerados: '',
      goToChat: false,
    }
  }

  onChange = (e) => {
    this.setState({ ...this.state,  [e.target.name]: e.target.value});
  }

  goToChat = () => {
    this.setState({...this.state, goToChat: !this.state.goToChat});
  }

  onClickCalcular = () => {
    this.setState({...this.state,impLiquidado:"121,500.00", efecTributacion:"12%",antiGenerados:"10,125.00" });
  }

  render() {
    return this.state.goToChat ?
     <Redirect to="/"/>
     :
    (
      <div className="container-fluid">
      <HeadPage goTo={this.goToChat}/>
        <div className="row background_form_gray">
          <div className="row text-center title_detail">
            <h1>Cálculo de ISR</h1>
          </div>
          <div className="col-lag-6 col-md-6 col-sm-11 col-xs-11 center_boos_elemet">
            <div className="form-group">
              <label className="">Ingresos brutos</label>
              <div className="input-group">
                <div className="input-group-addon">RD$</div>
                <input name="ingresoBruto" value={this.state.ingresoBruto} onChange={(e) => {
                  this.onChange(e)
                }} type="text" className="form-control input_calc"/>
              </div>
            </div>

            <div className="form-group">
              <label className="">Gastos deducibles</label>
              <div className="input-group">
                <div className="input-group-addon">RD$</div>
                <input name="deducibles" value={this.state.deducibles} onChange={(e) => {
                  this.onChange(e)
                }} type="text" className="form-control input_calc"/>
              </div>
            </div>

            <button type="button" className="btn btn-default calc_btn center-block" onClick={()=>{this.onClickCalcular()}}>Calcular</button>

            <div className="form-group">
              <label className="">Impuesto a Pagar</label>
              <div className="input-group">
                <div className="input-group-addon">RD$</div>
                <input value={this.state.impLiquidado} type="text" className="form-control"/>
              </div>
            </div>

            <div className="form-group">
              <label className="">Tasa efectiva de tributación</label>
              <div className="input-group">
                <div className="input-group-addon"></div>
                <input value={this.state.efecTributacion} type="text" className="form-control"/>
              </div>
            </div>

            <div className="form-group">
              <label className="">Anticipio a Pagar</label>
              <div className="input-group">
                <div className="input-group-addon">RD$</div>
                <input value={this.state.antiGenerados} type="text" className="form-control"/>
              </div>
            </div>

          </div>
        </div>

        <div className="footer-calc"></div>
      </div>
    )
  }
}

export default CalcISR;
