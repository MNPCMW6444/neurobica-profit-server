import React, { useState } from "react";

function App() {
  const [Manufacturing, setManufacturing] = useState();
  const [Inspection, setInspection] = useState();
  const [Packaging, setPackaging] = useState();
  const [Production, setProduction] = useState();
  const [Freights, setFreights] = useState();
  const [Landingcost, setLandingcost] = useState();
  const [Insert, setInsert] = useState();
  const [PPC, setPPC] = useState();
  const [Graphics, setGraphics] = useState();
  const [Listing, setListing] = useState();
  const [RefFee, setRefFee] = useState();
  const [FBAFee, setFBAFee] = useState();
  const [TotalOutPerUnit, setTotalOutPerUnit] = useState();
  const [MonthlySAAS, setMonthlySAAS] = useState();
  const [YearlySAAS, setYearlySAAS] = useState();
  const [LLC, setLLC] = useState();
  const [Trademark, setTrademark] = useState();
  const [Photographing, setPhotographing] = useState();
  const [unboxing, setunboxing] = useState();
  const [InsertDesign, setInsertDesign] = useState();
  const [PackagingDesign, setPackagingDesign] = useState();
  const [Samples, setSamples] = useState();
  const [TotalOneTime, setTotalOneTime] = useState();
  const [Revenue, setRevenue] = useState();
  const [UnitsInOrder, setUnitsInOrder] = useState();
  const [TotalOutPerOrder, setTotalOutPerOrder] = useState();
  const [TotalInPerOrder, setTotalInPerOrder] = useState();
  const [MarginPerUnit, setMarginPerUnit] = useState();
  const [Orders, setOrders] = useState();
  const [TotalIn, setTotalIn] = useState();
  const [TotalOut, setTotalOut] = useState();
  const [TotalProfit, setTotalProfit] = useState();
  const [TotalMargin, setTotalMargin] = useState();

  return (
    <>
      <h1 style={{ textAlign: "center" }}>PF PC(Profitability Calclator)</h1>
      <table style={{ marginLeft: "auto", marginRight: "auto" }}>
        <tbody style={{ textAlign: "center" }}>
          <tr>
            <div>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                Manufacturing:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={Manufacturing}
                  onChange={(e) => {
                    setManufacturing(+e.target.value);
                    setProduction(+e.target.value + +Inspection + +Packaging);
                    setLandingcost(
                      +e.target.value + +Inspection + +Packaging + +Freights
                    );
                    setListing(
                      +e.target.value +
                        +Inspection +
                        +Packaging +
                        +Freights +
                        +Insert +
                        +PPC +
                        +Graphics
                    );
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                Inspection:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={Inspection}
                  onChange={(e) => {
                    setInspection(+e.target.value);
                    setProduction(
                      +Manufacturing + +e.target.value + +Packaging
                    );
                    setLandingcost(
                      +Manufacturing + +e.target.value + +Packaging + +Freights
                    );
                    setListing(
                      +Manufacturing +
                        +e.target.value +
                        +Packaging +
                        +Freights +
                        +Insert +
                        +PPC +
                        +Graphics
                    );
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                Packaging:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={Packaging}
                  onChange={(e) => {
                    setPackaging(+e.target.value);
                    setProduction(
                      +Manufacturing + +Inspection + ++e.target.value
                    );
                    setLandingcost(
                      +Manufacturing + +Inspection + +e.target.value + +Freights
                    );
                    setListing(
                      +Manufacturing +
                        +Inspection +
                        +e.target.value +
                        +Freights +
                        +Insert +
                        +PPC +
                        +Graphics
                    );
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                Production:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(Production * 100) / 100}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                  disabled
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                Freights:{" "}
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={Freights}
                  onChange={(e) => {
                    setFreights(+e.target.value);
                    setLandingcost(+Production + +e.target.value);
                    setListing(
                      +Manufacturing +
                        +Inspection +
                        +Packaging +
                        +e.target.value +
                        +Insert +
                        +PPC +
                        +Graphics
                    );
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                Landingcost:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(Landingcost * 100) / 100}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                  disabled
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                Insert:{" "}
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={Insert}
                  onChange={(e) => {
                    setInsert(+e.target.value);
                    setListing(
                      +Manufacturing +
                        +Inspection +
                        +Packaging +
                        +Freights +
                        +e.target.value +
                        +PPC +
                        +Graphics
                    );
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                PPC:{" "}
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={PPC}
                  onChange={(e) => {
                    setPPC(+e.target.value);
                    setListing(
                      +Manufacturing +
                        +Inspection +
                        +Packaging +
                        +Freights +
                        +Insert +
                        +e.target.value +
                        +Graphics
                    );
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                Graphics:{" "}
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={Graphics}
                  onChange={(e) => {
                    setGraphics(+e.target.value);
                    setListing(
                      +Manufacturing +
                        +Inspection +
                        +Packaging +
                        +Freights +
                        +Insert +
                        +PPC +
                        +e.target.value
                    );
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                Listing:{" "}
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(Listing * 100) / 100}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                  disabled
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                RefFee:{" "}
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={RefFee}
                  onChange={(e) => {
                    setRefFee(+e.target.value);
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                FBAFee:{" "}
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={FBAFee}
                  onChange={(e) => {
                    setFBAFee(+e.target.value);
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                TotalOutPerUnit:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={TotalOutPerUnit}
                  onChange={(e) => {
                    setTotalOutPerUnit(+e.target.value);
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                MonthlySAAS:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={MonthlySAAS}
                  onChange={(e) => {
                    setMonthlySAAS(+e.target.value);
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                YearlySAAS:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={YearlySAAS}
                  onChange={(e) => {
                    setYearlySAAS(+e.target.value);
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                LLC:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={LLC}
                  onChange={(e) => {
                    setLLC(+e.target.value);
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                Trademark:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={Trademark}
                  onChange={(e) => {
                    setTrademark(+e.target.value);
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                Photographing:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={Photographing}
                  onChange={(e) => {
                    setPhotographing(+e.target.value);
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                unboxing:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={unboxing}
                  onChange={(e) => {
                    setunboxing(+e.target.value);
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                InsertDesign:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={InsertDesign}
                  onChange={(e) => {
                    setInsertDesign(+e.target.value);
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                PackagingDesign:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={PackagingDesign}
                  onChange={(e) => {
                    setPackagingDesign(+e.target.value);
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                Samples:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={Samples}
                  onChange={(e) => {
                    setSamples(+e.target.value);
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                TotalOneTime:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={TotalOneTime}
                  onChange={(e) => {
                    setTotalOneTime(+e.target.value);
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                Revenue:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={Revenue}
                  onChange={(e) => {
                    setRevenue(+e.target.value);
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                UnitsInOrder:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={UnitsInOrder}
                  onChange={(e) => {
                    setUnitsInOrder(+e.target.value);
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                TotalOutPerOrder:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={TotalOutPerOrder}
                  onChange={(e) => {
                    setTotalOutPerOrder(+e.target.value);
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                TotalInPerOrder:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={TotalInPerOrder}
                  onChange={(e) => {
                    setTotalInPerOrder(+e.target.value);
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                MarginPerUnit:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={MarginPerUnit}
                  onChange={(e) => {
                    setMarginPerUnit(+e.target.value);
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                Orders:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={Orders}
                  onChange={(e) => {
                    setOrders(+e.target.value);
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                TotalIn:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={TotalIn}
                  onChange={(e) => {
                    setTotalIn(+e.target.value);
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                TotalOut:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={TotalOut}
                  onChange={(e) => {
                    setTotalOut(+e.target.value);
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                TotalProfit:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={TotalProfit}
                  onChange={(e) => {
                    setTotalProfit(+e.target.value);
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "135px", color: "blue", fontWeight: "bolder" }}
              >
                TotalMargin:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={TotalMargin}
                  onChange={(e) => {
                    setTotalMargin(+e.target.value);
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {"$"}
              </td>
            </div>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
