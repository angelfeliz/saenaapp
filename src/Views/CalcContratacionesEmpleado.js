import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import DetailCalcEmpleado from './DetailCalcEmpleado';
import HeadPage from './HeadPage';

class CalcContratacionesEmpleado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sueldo: '',
      comision: '',
      vaciones: '',
      remuneracion: '',
      showDetail: false,
      goToChat:false,
      netoPagar: 0.00
    }
  }
  onChange = (e) => {
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value
      })
  }

  onClickCalcular = () => {
    this.setState({...this.state, netoPagar: "45,340.55"});
  }
goToChat = () => {
  this.setState({...this.state, goToChat: !this.state.goToChat});
}
  showDetail = () => {
     this.setState({ ...this.state, showDetail: !this.state.showDetail });
  }

  render() {
   return this.state.goToChat ?
        <Redirect to="/"/>
     :
     ( <div className="container-fluid">
      <HeadPage goTo={this.goToChat}/>

         { this.state.showDetail ?
             <DetailCalcEmpleado
                showDetail={this.showDetail}
             />
           :
           <div className="row background_form_gray">
           <div className="row text-center title_detail">
             <h1>Cálculo de contratación de empleados</h1>
           </div>
             <div className="col-lag-6 col-md-6 col-sm-11 col-xs-11 center_boos_elemet">
               <div className="form-group">
                 <label className="">Sueldo</label>
                 <div className="input-group">
                   <div className="input-group-addon">RD$</div>
                   <input name="sueldo" value={this.state.sueldo} onChange={(e) => {
                     this.onChange(e)
                   }} type="text" className="form-control input_calc"/>
                 </div>
               </div>

               <div className="form-group">
                 <label className="">Comision</label>
                 <div className="input-group">
                   <div className="input-group-addon">RD$</div>
                   <input name="comision" value={this.state.comision} onChange={(e) => {
                     this.onChange(e)
                   }} type="text" className="form-control input_calc"/>
                 </div>
               </div>

               <div className="form-group">
                 <label className="">Vacaciones</label>
                 <div className="input-group">
                   <div className="input-group-addon">RD$</div>
                   <input name="vaciones" value={this.state.vacaciones} onChange={(e) => {
                     this.onChange(e)
                   }} type="text" className="form-control input_calc"/>
                 </div>
               </div>

               <div className="form-group">
                 <label className="">Otras remuneraciones</label>
                 <div className="input-group">
                   <div className="input-group-addon">RD$</div>
                   <input name="remuneracion" value={this.state.remuneracion} onChange={(e) => {
                     this.onChange(e)
                   }} type="text" className="form-control input_calc"/>
                 </div>
               </div>

               <button type="button" className="btn btn-default calc_btn center-block" onClick={() => {this.onClickCalcular()}}>Calcular</button>

               <div className="form-group">
                 <label className="">Costo del empleado</label>
                 <div className="input-group">
                   <div className="input-group-addon">RD$</div>
                   <input value={this.state.netoPagar} type="text" className="form-control"/>
                 </div>
               </div>
               <div className="row text-center detail_calc">
                   <label onClick={()=>{this.showDetail()}} className="detail_calc">(Ver detalle)</label>
               </div>
             </div>
           </div>

         }
         <div className="footer-calc"></div>
       </div>
       )
}
}

export default CalcContratacionesEmpleado;
