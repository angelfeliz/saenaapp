import React from 'react';
import PropTypes from 'prop-types';

const DetailCalcEmpleado = (props) => (
  <div className="row background_form_gray">
    <div className="row text-center title_detail">
      <h1>Cálculo de contratación de empleados</h1>
    </div>
  <div className="row">
    <div className="col-lg-6 center_boos_elemet ">
      <div className="col-lag-6 col-md-4 col-sm-3 col-xs-3">
        <div className="row detail_space">
          <span className="">Sueldo</span>
        </div>
        <div className="row detail_space">
          <span className="">Empleado SFS</span>
        </div>
        <div className="row detail_space">
          <span className="">Empleado AFP</span>
        </div>
        <div className="row detail_space">
          <span className="">ISR</span>
        </div>
        <div className="row detail_space">
          <label className="detail_font">EMPLEADO RECIBE</label>
        </div>
        <div className="row detail_2 detail_space">
          <span className="">Sueldo</span>
        </div>
        <div className="row detail_space">
          <span className="detail_font">Aporte Empleador AFP</span>
        </div>
        <div className="row detail_space">
          <span className="detail_font">Aporte Empleador SFS</span>
        </div>
        <div className="row detail_space">
          <label className="detail_font">NETO A PAGAR</label>
        </div>
      </div>
      <div className="col-lag-4 col-md-4 col-sm-3 col-xs-3 pull-right">
        <div className="row detail_space">
          <span className="">RD$40,0000.00</span>
        </div>
        <div className="row detail_space">
          <span className="">RD$1,216.00</span>
        </div>
        <div className="row detail_space">
          <span className="">RD$1,148.00</span>
        </div>
        <div className="row detail_space">
          <span className="">RD$442.65</span>
        </div>
        <div className="row detail_space">
          <label className="">RD$37,193.00</label>
        </div>
        <div className="row detail_2 detail_space">
          <span className="">RD$40,000.00</span>
        </div>
        <div className="row detail_space">
          <span className="">RD$2,672.16</span>
        </div>
        <div className="row detail_space">
          <span className="">RD$2,668.39</span>
        </div>
        <div className="row detail_space">
          <label className="">RD$45,340.55</label>
        </div>
      </div>
    </div>
</div>
<div className="row detail_calc text-center ver_formulario">
  <label onClick={() => {props.showDetail()}} className="detail_calc">Ver el formulario</label>
</div>
  </div>
)

DetailCalcEmpleado.propTypes = {
  showDetail: propTypes.func,
}
export default DetailCalcEmpleado
