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
  const [Revenue, setRevenue] = useState();
  const [RefFee, setRefFee] = useState();
  const [FBAFee, setFBAFee] = useState();
  const [TotalOutPerUnit, setTotalOutPerUnit] = useState();
  const [MonthlySAAS, setMonthlySAAS] = useState();
  const [YearlySAAS, setYearlySAAS] = useState();
  const [LLC, setLLC] = useState();
  const [Trademark, setTrademark] = useState();
  const [Photographing, setPhotographing] = useState();
  const [Unboxing, setUnboxing] = useState();
  const [InsertDesign, setInsertDesign] = useState();
  const [PackagingDesign, setPackagingDesign] = useState();
  const [Samples, setSamples] = useState();
  const [TotalOneTime, setTotalOneTime] = useState();
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
                  value={parseInt(Manufacturing * 100) / 100}
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
                    setTotalOutPerUnit(
                      +e.target.value +
                        +Inspection +
                        +Packaging +
                        +Insert +
                        +PPC +
                        +Graphics +
                        +RefFee +
                        +FBAFee
                    );
                    setTotalOutPerOrder(
                      +UnitsInOrder *
                        (+Listing +
                          +e.target.value +
                          +Inspection +
                          +Packaging +
                          +Insert +
                          +PPC +
                          +Graphics +
                          +RefFee +
                          +FBAFee)
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
                  value={parseInt(Inspection * 100) / 100}
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
                    setTotalOutPerUnit(
                      +Manufacturing +
                        +e.target.value +
                        +Inspection +
                        +Packaging +
                        +Insert +
                        +PPC +
                        +Graphics +
                        +RefFee +
                        +FBAFee
                    );
                    setTotalOutPerOrder(
                      +UnitsInOrder *
                        (+Listing +
                          +Manufacturing +
                          +e.target.value +
                          +Inspection +
                          +Packaging +
                          +Insert +
                          +PPC +
                          +Graphics +
                          +RefFee +
                          +FBAFee)
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
                  value={parseInt(Packaging * 100) / 100}
                  onChange={(e) => {
                    setPackaging(+e.target.value);
                    setProduction(
                      +Manufacturing + +Inspection + +e.target.value
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
                    setTotalOutPerUnit(
                      +Manufacturing +
                        +Inspection +
                        +e.target.value +
                        +Packaging +
                        +Insert +
                        +PPC +
                        +Graphics +
                        +RefFee +
                        +FBAFee
                    );
                    setTotalOutPerOrder(
                      +UnitsInOrder *
                        (+Listing +
                          +Manufacturing +
                          +Inspection +
                          +e.target.value +
                          +Packaging +
                          +Insert +
                          +PPC +
                          +Graphics +
                          +RefFee +
                          +FBAFee)
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
                  value={parseInt(Freights * 100) / 100}
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
                    setTotalOutPerUnit(
                      +Manufacturing +
                        +Inspection +
                        +Packaging +
                        +e.target.value +
                        +Insert +
                        +PPC +
                        +Graphics +
                        +RefFee +
                        +FBAFee
                    );
                    setTotalOutPerOrder(
                      +UnitsInOrder *
                        (+Listing +
                          +Manufacturing +
                          +Inspection +
                          +Packaging +
                          +e.target.value +
                          +Insert +
                          +PPC +
                          +Graphics +
                          +RefFee +
                          +FBAFee)
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
                  value={parseInt(Insert * 100) / 100}
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
                    setTotalOutPerUnit(
                      +Manufacturing +
                        +Inspection +
                        +Packaging +
                        +Freights +
                        +e.target.value +
                        +PPC +
                        +Graphics +
                        +RefFee +
                        +FBAFee
                    );
                    setTotalOutPerOrder(
                      +UnitsInOrder *
                        (+Listing +
                          +Manufacturing +
                          +Inspection +
                          +Packaging +
                          +Freights +
                          +e.target.value +
                          +PPC +
                          +Graphics +
                          +RefFee +
                          +FBAFee)
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
                  value={parseInt(PPC * 100) / 100}
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
                    setTotalOutPerUnit(
                      +Manufacturing +
                        +Inspection +
                        +Packaging +
                        +Freights +
                        +Insert +
                        +e.target.value +
                        +Graphics +
                        +RefFee +
                        +FBAFee
                    );
                    setTotalOutPerOrder(
                      +UnitsInOrder *
                        (+Listing +
                          +Manufacturing +
                          +Inspection +
                          +Packaging +
                          +Freights +
                          +Insert +
                          +e.target.value +
                          +Graphics +
                          +RefFee +
                          +FBAFee)
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
                  value={parseInt(Graphics * 100) / 100}
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
                    setTotalOutPerUnit(
                      +Manufacturing +
                        +Inspection +
                        +Packaging +
                        +Freights +
                        +Insert +
                        +PPC +
                        +e.target.value +
                        +RefFee +
                        +FBAFee
                    );
                    setTotalOutPerOrder(
                      +UnitsInOrder *
                        (+Listing +
                          +Manufacturing +
                          +Inspection +
                          +Packaging +
                          +Freights +
                          +Insert +
                          +PPC +
                          +e.target.value +
                          +RefFee +
                          +FBAFee)
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
          </tr>{" "}
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
                  value={parseInt(Revenue * 100) / 100}
                  onChange={(e) => {
                    setRevenue(+e.target.value);
                    setRefFee(0.15 * +e.target.value);
                    setFBAFee(0.3 * +e.target.value);
                    setTotalOutPerUnit(
                      +Listing +
                        +(0.15 * +e.target.value) +
                        +(0.3 * +e.target.value)
                    );
                    setTotalOutPerOrder(
                      +UnitsInOrder *
                        (+Listing +
                          +(0.15 * +e.target.value) +
                          +(0.3 * +e.target.value))
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
                RefFee:{" "}
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(RefFee * 100) / 100}
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
                FBAFee:{" "}
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(FBAFee * 100) / 100}
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
                TotalOutPerUnit:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(TotalOutPerUnit * 100) / 100}
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
                MonthlySAAS:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(MonthlySAAS * 100) / 100}
                  onChange={(e) => {
                    setMonthlySAAS(+e.target.value);
                    setYearlySAAS(12 * +e.target.value);
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
                  value={parseInt(YearlySAAS * 100) / 100}
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
                LLC:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(LLC * 100) / 100}
                  onChange={(e) => {
                    setLLC(+e.target.value);
                    setTotalOneTime(
                      +e.target.value +
                        +Trademark +
                        +Photographing +
                        +Unboxing +
                        +InsertDesign +
                        +PackagingDesign +
                        +Samples
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
                Trademark:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(Trademark * 100) / 100}
                  onChange={(e) => {
                    setTrademark(+e.target.value);
                    setTotalOneTime(
                      +LLC +
                        +e.target.value +
                        +Photographing +
                        +Unboxing +
                        +InsertDesign +
                        +PackagingDesign +
                        +Samples
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
                Photographing:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(Photographing * 100) / 100}
                  onChange={(e) => {
                    setPhotographing(+e.target.value);
                    setTotalOneTime(
                      +LLC +
                        +Trademark +
                        +e.target.value +
                        +Unboxing +
                        +InsertDesign +
                        +PackagingDesign +
                        +Samples
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
                Unboxing:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(Unboxing * 100) / 100}
                  onChange={(e) => {
                    setUnboxing(+e.target.value);
                    setTotalOneTime(
                      +LLC +
                        +Trademark +
                        +Photographing +
                        +e.target.value +
                        +InsertDesign +
                        +PackagingDesign +
                        +Samples
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
                InsertDesign:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(InsertDesign * 100) / 100}
                  onChange={(e) => {
                    setInsertDesign(+e.target.value);
                    setTotalOneTime(
                      +LLC +
                        +Trademark +
                        +Photographing +
                        +Unboxing +
                        +e.target.value +
                        +PackagingDesign +
                        +Samples
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
                PackagingDesign:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(PackagingDesign * 100) / 100}
                  onChange={(e) => {
                    setPackagingDesign(+e.target.value);
                    setTotalOneTime(
                      +LLC +
                        +Trademark +
                        +Photographing +
                        +Unboxing +
                        +InsertDesign +
                        +e.target.value +
                        +Samples
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
                Samples:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(Samples * 100) / 100}
                  onChange={(e) => {
                    setSamples(+e.target.value);
                    setTotalOneTime(
                      +LLC +
                        +Trademark +
                        +Photographing +
                        +Unboxing +
                        +InsertDesign +
                        +PackagingDesign +
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
                TotalOneTime:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(TotalOneTime * 100) / 100}
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
                UnitsInOrder:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(UnitsInOrder * 100) / 100}
                  onChange={(e) => {
                    setUnitsInOrder(+e.target.value);
                    setTotalOutPerOrder(+e.target.value * +TotalOutPerUnit);
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
                  value={parseInt(TotalOutPerOrder * 100) / 100}
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
                TotalInPerOrder:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(TotalInPerOrder * 100) / 100}
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
                  value={parseInt(MarginPerUnit * 100) / 100}
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
                  value={parseInt(Orders * 100) / 100}
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
                  value={parseInt(TotalIn * 100) / 100}
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
                  value={parseInt(TotalOut * 100) / 100}
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
                  value={parseInt(TotalProfit * 100) / 100}
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
                  value={parseInt(TotalMargin * 100) / 100}
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
