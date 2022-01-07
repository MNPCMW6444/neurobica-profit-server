import React, { useState } from "react";
import Chart from "./Chart";

function App() {
  const [Manufacturing, setManufacturing] = useState();
  const [Inspection, setInspection] = useState();
  const [Packaging, setPackaging] = useState();
  const [Production, setProduction] = useState();
  const [Freights, setFreights] = useState();
  const [Landingcost, setLandingcost] = useState();
  const [Insert, setInsert] = useState();
  const [PPC, setPPC] = useState();
  const [Listing, setListing] = useState();
  const [Revenue, setRevenue] = useState();
  const [RefFee, setRefFee] = useState();
  const [FBAFee, setFBAFee] = useState();
  const [TotalOutPerUnit, setTotalOutPerUnit] = useState();
  const [OneOrderTimeSAAS, setOneOrderTimeSAAS] = useState();
  const [TotalSAAS, setTotalSAAS] = useState();
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

  let data = [];
  for (let i = 1; i < 10; i++) {
    data.push({
      orderNo: i,
      profitMargin: Math.round(
        ((+TotalInPerOrder * +i - (+TotalOutPerOrder * +i + +TotalOneTime)) /
          (+TotalInPerOrder * +i)) *
          100
      ),
      Asimptot: MarginPerUnit,
      l50: 50,
      l30: 30,
      l15: 15,
      l0: 0,
    });
  }

  return (
    <>
      <div style={{ padding: "50px" }}>
        <h1 style={{ textAlign: "left" }}>PF PC (Profitability Calclator)</h1>
        <table /* style={{ marginLeft: "auto", marginRight: "auto" }} */>
          <tbody style={{ textAlign: "left" }}>
            <tr>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                Manufacturing:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Manufacturing}
                  onChange={(e) => {
                    setManufacturing(Math.round(+e.target.value * 100) / 100);
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
                        +PPC
                    );
                    setTotalOutPerUnit(
                      +e.target.value +
                        +Inspection +
                        +Packaging +
                        +Freights +
                        +Insert +
                        +PPC +
                        +RefFee +
                        +FBAFee
                    );
                    setMarginPerUnit(
                      ((+UnitsInOrder * +Revenue -
                        +UnitsInOrder *
                          (+e.target.value +
                            +Inspection +
                            +Packaging +
                            +Freights +
                            +Insert +
                            +PPC +
                            +RefFee +
                            +FBAFee)) /
                        (+UnitsInOrder * +Revenue)) *
                        100
                    );
                    setTotalOutPerOrder(
                      +OneOrderTimeSAAS +
                        +UnitsInOrder *
                          (+e.target.value +
                            +Inspection +
                            +Packaging +
                            +Freights +
                            +Insert +
                            +PPC +
                            +RefFee +
                            +FBAFee)
                    );
                    setTotalOut(
                      +Orders *
                        (+OneOrderTimeSAAS +
                          +UnitsInOrder *
                            (+e.target.value +
                              +Inspection +
                              +Packaging +
                              +Freights +
                              +Insert +
                              +PPC +
                              +RefFee +
                              +FBAFee))
                    );
                    setTotalProfit(
                      +TotalIn -
                        +Orders *
                          (+OneOrderTimeSAAS +
                            +UnitsInOrder *
                              (+e.target.value +
                                +Inspection +
                                +Packaging +
                                +Freights +
                                +Insert +
                                +PPC +
                                +RefFee +
                                +FBAFee))
                    );
                    setTotalMargin(
                      ((+TotalIn -
                        +Orders *
                          (+OneOrderTimeSAAS +
                            +UnitsInOrder *
                              (+e.target.value +
                                +Inspection +
                                +Packaging +
                                +Freights +
                                +Insert +
                                +PPC +
                                +RefFee +
                                +FBAFee))) /
                        +TotalIn) *
                        100
                    );
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                Trademark:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Trademark}
                  onChange={(e) => {
                    setTrademark(Math.round(+e.target.value * 100) / 100);
                    setTotalOneTime(
                      +LLC +
                        +e.target.value +
                        +Photographing +
                        +Unboxing +
                        +InsertDesign +
                        +PackagingDesign +
                        +Samples
                    );
                    setTotalOut(
                      +TotalOutPerOrder * +Orders +
                        (+LLC +
                          +e.target.value +
                          +Photographing +
                          +Unboxing +
                          +InsertDesign +
                          +PackagingDesign +
                          +Samples)
                    );
                    setTotalProfit(
                      TotalIn -
                        (+TotalOutPerOrder * +Orders +
                          (+LLC +
                            +e.target.value +
                            +Photographing +
                            +Unboxing +
                            +InsertDesign +
                            +PackagingDesign +
                            +Samples))
                    );
                    setTotalMargin(
                      ((TotalIn -
                        (+TotalOutPerOrder * +Orders +
                          (+LLC +
                            +e.target.value +
                            +Photographing +
                            +Unboxing +
                            +InsertDesign +
                            +PackagingDesign +
                            +Samples))) /
                        +TotalIn) *
                        100
                    );
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                Inspection:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Inspection}
                  onChange={(e) => {
                    setInspection(Math.round(+e.target.value * 100) / 100);
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
                        +PPC
                    );
                    setTotalOutPerUnit(
                      +Manufacturing +
                        +e.target.value +
                        +Packaging +
                        +Freights +
                        +Insert +
                        +PPC +
                        +RefFee +
                        +FBAFee
                    );
                    setMarginPerUnit(
                      ((+UnitsInOrder * +Revenue -
                        +UnitsInOrder *
                          (+Manufacturing +
                            +e.target.value +
                            +Packaging +
                            +Freights +
                            +Insert +
                            +PPC +
                            +RefFee +
                            +FBAFee)) /
                        (+UnitsInOrder * +Revenue)) *
                        100
                    );
                    setTotalOutPerOrder(
                      +OneOrderTimeSAAS +
                        +UnitsInOrder *
                          (+Manufacturing +
                            +e.target.value +
                            +Packaging +
                            +Freights +
                            +Insert +
                            +PPC +
                            +RefFee +
                            +FBAFee)
                    );
                    setTotalOut(
                      +Orders *
                        (+OneOrderTimeSAAS +
                          +UnitsInOrder *
                            (+Manufacturing +
                              +e.target.value +
                              +Packaging +
                              +Freights +
                              +Insert +
                              +PPC +
                              +RefFee +
                              +FBAFee))
                    );
                    setTotalProfit(
                      TotalIn -
                        +Orders *
                          (+OneOrderTimeSAAS +
                            +UnitsInOrder *
                              (+Manufacturing +
                                +e.target.value +
                                +Packaging +
                                +Freights +
                                +Insert +
                                +PPC +
                                +RefFee +
                                +FBAFee))
                    );
                    setTotalMargin(
                      ((TotalIn -
                        +Orders *
                          (+OneOrderTimeSAAS +
                            +UnitsInOrder *
                              (+Manufacturing +
                                +e.target.value +
                                +Packaging +
                                +Freights +
                                +Insert +
                                +PPC +
                                +RefFee +
                                +FBAFee))) /
                        +TotalIn) *
                        100
                    );
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                Unboxing:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Unboxing}
                  onChange={(e) => {
                    setUnboxing(Math.round(+e.target.value * 100) / 100);
                    setTotalOneTime(
                      +LLC +
                        +Trademark +
                        +Photographing +
                        +e.target.value +
                        +InsertDesign +
                        +PackagingDesign +
                        +Samples
                    );
                    setTotalOut(
                      +TotalOutPerOrder * +Orders +
                        (+LLC +
                          +Trademark +
                          +Photographing +
                          +e.target.value +
                          +InsertDesign +
                          +PackagingDesign +
                          +Samples)
                    );
                    setTotalProfit(
                      TotalIn -
                        (+TotalOutPerOrder * +Orders +
                          (+LLC +
                            +Trademark +
                            +Photographing +
                            +e.target.value +
                            +InsertDesign +
                            +PackagingDesign +
                            +Samples))
                    );
                    setTotalMargin(
                      ((TotalIn -
                        (+TotalOutPerOrder * +Orders +
                          (+LLC +
                            +Trademark +
                            +Photographing +
                            +e.target.value +
                            +InsertDesign +
                            +PackagingDesign +
                            +Samples))) /
                        +TotalIn) *
                        100
                    );
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                Packaging:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Packaging}
                  onChange={(e) => {
                    setPackaging(Math.round(+e.target.value * 100) / 100);
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
                        +PPC
                    );
                    setTotalOutPerUnit(
                      +Manufacturing +
                        +Inspection +
                        +e.target.value +
                        +Freights +
                        +Insert +
                        +PPC +
                        +RefFee +
                        +FBAFee
                    );
                    setMarginPerUnit(
                      ((+UnitsInOrder * +Revenue -
                        +UnitsInOrder *
                          (+Manufacturing +
                            +Inspection +
                            +e.target.value +
                            +Freights +
                            +Insert +
                            +PPC +
                            +RefFee +
                            +FBAFee)) /
                        (+UnitsInOrder * +Revenue)) *
                        100
                    );
                    setTotalOutPerOrder(
                      +OneOrderTimeSAAS +
                        +UnitsInOrder *
                          (+Manufacturing +
                            +Inspection +
                            +e.target.value +
                            +Freights +
                            +Insert +
                            +PPC +
                            +RefFee +
                            +FBAFee)
                    );
                    setTotalOut(
                      +Orders *
                        (+OneOrderTimeSAAS +
                          +UnitsInOrder *
                            (+Manufacturing +
                              +Inspection +
                              +e.target.value +
                              +Freights +
                              +Insert +
                              +PPC +
                              +RefFee +
                              +FBAFee))
                    );
                    setTotalProfit(
                      TotalIn -
                        +Orders *
                          (+OneOrderTimeSAAS +
                            +UnitsInOrder *
                              (+Manufacturing +
                                +Inspection +
                                +e.target.value +
                                +Freights +
                                +Insert +
                                +PPC +
                                +RefFee +
                                +FBAFee))
                    );
                    setTotalMargin(
                      ((TotalIn -
                        +Orders *
                          (+OneOrderTimeSAAS +
                            +UnitsInOrder *
                              (+Manufacturing +
                                +Inspection +
                                +e.target.value +
                                +Freights +
                                +Insert +
                                +PPC +
                                +RefFee +
                                +FBAFee))) /
                        +TotalIn) *
                        100
                    );
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                Photographing:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Photographing}
                  onChange={(e) => {
                    setPhotographing(Math.round(+e.target.value * 100) / 100);
                    setTotalOneTime(
                      +LLC +
                        +Trademark +
                        +e.target.value +
                        +Unboxing +
                        +InsertDesign +
                        +PackagingDesign +
                        +Samples
                    );
                    setTotalOut(
                      +TotalOutPerOrder * +Orders +
                        (+LLC +
                          +Trademark +
                          +e.target.value +
                          +Unboxing +
                          +InsertDesign +
                          +PackagingDesign +
                          +Samples)
                    );
                    setTotalProfit(
                      TotalIn -
                        (+TotalOutPerOrder * +Orders +
                          (+LLC +
                            +Trademark +
                            +e.target.value +
                            +Unboxing +
                            +InsertDesign +
                            +PackagingDesign +
                            +Samples))
                    );
                    setTotalMargin(
                      ((TotalIn -
                        (+TotalOutPerOrder * +Orders +
                          (+LLC +
                            +Trademark +
                            +e.target.value +
                            +Unboxing +
                            +InsertDesign +
                            +PackagingDesign +
                            +Samples))) /
                        +TotalIn) *
                        100
                    );
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                Production:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Math.round(Production * 100) / 100}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                  disabled
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                PackagingDesign:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={PackagingDesign}
                  onChange={(e) => {
                    setPackagingDesign(Math.round(+e.target.value * 100) / 100);
                    setTotalOneTime(
                      +LLC +
                        +Trademark +
                        +Photographing +
                        +Unboxing +
                        +InsertDesign +
                        +e.target.value +
                        +Samples
                    );
                    setTotalOut(
                      +TotalOutPerOrder * +Orders +
                        (+LLC +
                          +Trademark +
                          +Photographing +
                          +Unboxing +
                          +InsertDesign +
                          +e.target.value +
                          +Samples)
                    );
                    setTotalProfit(
                      TotalIn -
                        (+TotalOutPerOrder * +Orders +
                          (+LLC +
                            +Trademark +
                            +Photographing +
                            +Unboxing +
                            +InsertDesign +
                            +e.target.value +
                            +Samples))
                    );
                    setTotalMargin(
                      ((TotalIn -
                        (+TotalOutPerOrder * +Orders +
                          (+LLC +
                            +Trademark +
                            +Photographing +
                            +Unboxing +
                            +InsertDesign +
                            +e.target.value +
                            +Samples))) /
                        +TotalIn) *
                        100
                    );
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                Freights:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Freights}
                  onChange={(e) => {
                    setFreights(Math.round(+e.target.value * 100) / 100);
                    setLandingcost(+Production + +e.target.value);
                    setListing(
                      +Manufacturing +
                        +Inspection +
                        +Packaging +
                        +e.target.value +
                        +Insert +
                        +PPC
                    );
                    setTotalOutPerUnit(
                      +Manufacturing +
                        +Inspection +
                        +Packaging +
                        +e.target.value +
                        +Insert +
                        +PPC +
                        +RefFee +
                        +FBAFee
                    );
                    setMarginPerUnit(
                      ((+UnitsInOrder * +Revenue -
                        +UnitsInOrder *
                          (+Manufacturing +
                            +Inspection +
                            +Packaging +
                            +e.target.value +
                            +Insert +
                            +PPC +
                            +RefFee +
                            +FBAFee)) /
                        (+UnitsInOrder * +Revenue)) *
                        100
                    );
                    setTotalOutPerOrder(
                      +OneOrderTimeSAAS +
                        +UnitsInOrder *
                          (+Manufacturing +
                            +Inspection +
                            +Packaging +
                            +e.target.value +
                            +Insert +
                            +PPC +
                            +RefFee +
                            +FBAFee)
                    );
                    setTotalOut(
                      +Orders *
                        (+OneOrderTimeSAAS +
                          +UnitsInOrder *
                            (+Manufacturing +
                              +Inspection +
                              +Packaging +
                              +e.target.value +
                              +Insert +
                              +PPC +
                              +RefFee +
                              +FBAFee))
                    );
                    setTotalProfit(
                      TotalIn -
                        +Orders *
                          (+OneOrderTimeSAAS +
                            +UnitsInOrder *
                              (+Manufacturing +
                                +Inspection +
                                +Packaging +
                                +e.target.value +
                                +Insert +
                                +PPC +
                                +RefFee +
                                +FBAFee))
                    );
                    setTotalMargin(
                      ((TotalIn -
                        +Orders *
                          (+OneOrderTimeSAAS +
                            +UnitsInOrder *
                              (+Manufacturing +
                                +Inspection +
                                +Packaging +
                                +e.target.value +
                                +Insert +
                                +PPC +
                                +RefFee +
                                +FBAFee))) /
                        +TotalIn) *
                        100
                    );
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                InsertDesign:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={InsertDesign}
                  onChange={(e) => {
                    setInsertDesign(Math.round(+e.target.value * 100) / 100);
                    setTotalOneTime(
                      +LLC +
                        +Trademark +
                        +Photographing +
                        +Unboxing +
                        +e.target.value +
                        +PackagingDesign +
                        +Samples
                    );
                    setTotalOut(
                      +TotalOutPerOrder * +Orders +
                        (+LLC +
                          +Trademark +
                          +Photographing +
                          +Unboxing +
                          +e.target.value +
                          +PackagingDesign +
                          +Samples)
                    );
                    setTotalProfit(
                      TotalIn -
                        (+TotalOutPerOrder * +Orders +
                          (+LLC +
                            +Trademark +
                            +Photographing +
                            +Unboxing +
                            +e.target.value +
                            +PackagingDesign +
                            +Samples))
                    );
                    setTotalMargin(
                      ((TotalIn -
                        (+TotalOutPerOrder * +Orders +
                          (+LLC +
                            +Trademark +
                            +Photographing +
                            +Unboxing +
                            +e.target.value +
                            +PackagingDesign +
                            +Samples))) /
                        +TotalIn) *
                        100
                    );
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                Landingcost:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Math.round(Landingcost * 100) / 100}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                  disabled
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                Samples:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Samples}
                  onChange={(e) => {
                    setSamples(Math.round(+e.target.value * 100) / 100);
                    setTotalOneTime(
                      +LLC +
                        +Trademark +
                        +Photographing +
                        +Unboxing +
                        +InsertDesign +
                        +PackagingDesign +
                        +e.target.value
                    );
                    setTotalOut(
                      +TotalOutPerOrder * +Orders +
                        (+LLC +
                          +Trademark +
                          +Photographing +
                          +Unboxing +
                          +InsertDesign +
                          +PackagingDesign +
                          +e.target.value)
                    );
                    setTotalProfit(
                      TotalIn -
                        (+TotalOutPerOrder * +Orders +
                          (+LLC +
                            +Trademark +
                            +Photographing +
                            +Unboxing +
                            +InsertDesign +
                            +PackagingDesign +
                            +e.target.value))
                    );
                    setTotalMargin(
                      ((TotalIn -
                        (+TotalOutPerOrder * +Orders +
                          (+LLC +
                            +Trademark +
                            +Photographing +
                            +Unboxing +
                            +InsertDesign +
                            +PackagingDesign +
                            +e.target.value))) /
                        +TotalIn) *
                        100
                    );
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                Insert:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Insert}
                  onChange={(e) => {
                    setInsert(Math.round(+e.target.value * 100) / 100);
                    setListing(
                      +Manufacturing +
                        +Inspection +
                        +Packaging +
                        +Freights +
                        +e.target.value +
                        +PPC
                    );
                    setTotalOutPerUnit(
                      +Manufacturing +
                        +Inspection +
                        +Packaging +
                        +Freights +
                        +e.target.value +
                        +PPC +
                        +RefFee +
                        +FBAFee
                    );
                    setMarginPerUnit(
                      ((+UnitsInOrder * +Revenue -
                        +UnitsInOrder *
                          (+Manufacturing +
                            +Inspection +
                            +Packaging +
                            +Freights +
                            +e.target.value +
                            +PPC +
                            +RefFee +
                            +FBAFee)) /
                        (+UnitsInOrder * +Revenue)) *
                        100
                    );
                    setTotalOutPerOrder(
                      +OneOrderTimeSAAS +
                        +UnitsInOrder *
                          (+Manufacturing +
                            +Inspection +
                            +Packaging +
                            +Freights +
                            +e.target.value +
                            +PPC +
                            +RefFee +
                            +FBAFee)
                    );
                    setTotalOut(
                      +Orders *
                        (+OneOrderTimeSAAS +
                          +UnitsInOrder *
                            (+Manufacturing +
                              +Inspection +
                              +Packaging +
                              +Freights +
                              +e.target.value +
                              +PPC +
                              +RefFee +
                              +FBAFee))
                    );
                    setTotalProfit(
                      TotalIn -
                        +Orders *
                          (+OneOrderTimeSAAS +
                            +UnitsInOrder *
                              (+Manufacturing +
                                +Inspection +
                                +Packaging +
                                +Freights +
                                +e.target.value +
                                +PPC +
                                +RefFee +
                                +FBAFee))
                    );
                    setTotalMargin(
                      ((TotalIn -
                        +Orders *
                          (+OneOrderTimeSAAS +
                            +UnitsInOrder *
                              (+Manufacturing +
                                +Inspection +
                                +Packaging +
                                +Freights +
                                +e.target.value +
                                +PPC +
                                +RefFee +
                                +FBAFee))) /
                        +TotalIn) *
                        100
                    );
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                TotalOneTime:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Math.round(TotalOneTime * 100) / 100}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                  disabled
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                PPC:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={PPC}
                  onChange={(e) => {
                    setPPC(Math.round(+e.target.value * 100) / 100);
                    setListing(
                      +Manufacturing +
                        +Inspection +
                        +Packaging +
                        +Freights +
                        +Insert +
                        +e.target.value
                    );
                    setTotalOutPerUnit(
                      +Manufacturing +
                        +Inspection +
                        +Packaging +
                        +Freights +
                        +Insert +
                        +e.target.value +
                        +RefFee +
                        +FBAFee
                    );
                    setMarginPerUnit(
                      ((+UnitsInOrder * +Revenue -
                        +UnitsInOrder *
                          (+Manufacturing +
                            +Inspection +
                            +Packaging +
                            +Freights +
                            +Insert +
                            +e.target.value +
                            +RefFee +
                            +FBAFee)) /
                        (+UnitsInOrder * +Revenue)) *
                        100
                    );
                    setTotalOutPerOrder(
                      +OneOrderTimeSAAS +
                        +UnitsInOrder *
                          (+Manufacturing +
                            +Inspection +
                            +Packaging +
                            +Freights +
                            +Insert +
                            +PPC +
                            +RefFee +
                            +FBAFee)
                    );
                    setTotalOut(
                      +Orders *
                        (+OneOrderTimeSAAS +
                          +UnitsInOrder *
                            (+Manufacturing +
                              +Inspection +
                              +Packaging +
                              +Freights +
                              +Insert +
                              +e.target.value +
                              +RefFee +
                              +FBAFee))
                    );
                    setTotalProfit(
                      TotalIn -
                        +Orders *
                          (+OneOrderTimeSAAS +
                            +UnitsInOrder *
                              (+Manufacturing +
                                +Inspection +
                                +Packaging +
                                +Freights +
                                +Insert +
                                +e.target.value +
                                +RefFee +
                                +FBAFee))
                    );
                    setTotalMargin(
                      ((TotalIn -
                        +Orders *
                          (+OneOrderTimeSAAS +
                            +UnitsInOrder *
                              (+Manufacturing +
                                +Inspection +
                                +Packaging +
                                +Freights +
                                +Insert +
                                +e.target.value +
                                +RefFee +
                                +FBAFee))) /
                        +TotalIn) *
                        100
                    );
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                UnitsInOrder:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={UnitsInOrder}
                  onChange={(e) => {
                    setUnitsInOrder(Math.round(+e.target.value * 100) / 100);
                    setMarginPerUnit(
                      ((+e.target.value * +Revenue -
                        +e.target.value * +TotalOutPerUnit) /
                        (+e.target.value * +Revenue)) *
                        100
                    );
                    setTotalOutPerOrder(
                      +OneOrderTimeSAAS + +e.target.value * +TotalOutPerUnit
                    );
                    setTotalInPerOrder(+e.target.value * +Revenue);
                    setTotalIn(+e.target.value * +Revenue * +Orders);
                    setTotalOut(
                      (+OneOrderTimeSAAS + +e.target.value * +TotalOutPerUnit) *
                        +Orders
                    );
                    setTotalProfit(
                      +TotalIn -
                        (+OneOrderTimeSAAS +
                          +e.target.value * +TotalOutPerUnit) *
                          +Orders
                    );
                    setTotalMargin(
                      ((+TotalIn -
                        (+OneOrderTimeSAAS +
                          +e.target.value * +TotalOutPerUnit) *
                          +Orders) /
                        +TotalIn) *
                        100
                    );
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              ></td>
            </tr>
            <tr>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                Listing:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Math.round(Listing * 100) / 100}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                  disabled
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                TotalOutPerOrder:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Math.round(TotalOutPerOrder * 100) / 100}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                  disabled
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                Revenue:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Revenue}
                  onChange={(e) => {
                    setRevenue(Math.round(+e.target.value * 100) / 100);
                    setMarginPerUnit(
                      ((+UnitsInOrder * +e.target.value -
                        +UnitsInOrder *
                          (+Manufacturing +
                            +Inspection +
                            +Packaging +
                            +Freights +
                            +Insert +
                            +PPC +
                            0.15 * +e.target.value +
                            0.25 * +e.target.value)) /
                        (+UnitsInOrder * +e.target.value)) *
                        100
                    );
                    setTotalOutPerUnit(
                      +Manufacturing +
                        +Inspection +
                        +Packaging +
                        +Freights +
                        +Insert +
                        +PPC +
                        0.15 * +e.target.value +
                        0.25 * +e.target.value
                    );
                    setRefFee(0.15 * +e.target.value);
                    setFBAFee(0.25 * +e.target.value);
                    setTotalInPerOrder(+UnitsInOrder * +e.target.value);
                    setTotalOutPerOrder(
                      (+Manufacturing +
                        +Inspection +
                        +Packaging +
                        +Freights +
                        +Insert +
                        +PPC +
                        0.15 * +e.target.value +
                        0.25 * +e.target.value) *
                        +UnitsInOrder +
                        OneOrderTimeSAAS
                    );
                    setTotalIn(+e.target.value * +UnitsInOrder * +Orders);
                    setTotalOut(
                      ((+Manufacturing +
                        +Inspection +
                        +Packaging +
                        +Freights +
                        +Insert +
                        +PPC +
                        0.15 * +e.target.value +
                        0.25 * +e.target.value) *
                        +UnitsInOrder +
                        OneOrderTimeSAAS) *
                        +Orders +
                        +TotalOneTime
                    );
                    setTotalProfit(
                      +e.target.value * +UnitsInOrder * +Orders -
                        (((+Manufacturing +
                          +Inspection +
                          +Packaging +
                          +Freights +
                          +Insert +
                          +PPC +
                          0.15 * +e.target.value +
                          0.25 * +e.target.value) *
                          +UnitsInOrder +
                          OneOrderTimeSAAS) *
                          +Orders +
                          +TotalOneTime)
                    );
                    setTotalMargin(
                      ((+e.target.value * +UnitsInOrder * +Orders -
                        (((+Manufacturing +
                          +Inspection +
                          +Packaging +
                          +Freights +
                          +Insert +
                          +PPC +
                          0.15 * +e.target.value +
                          0.25 * +e.target.value) *
                          +UnitsInOrder +
                          OneOrderTimeSAAS) *
                          +Orders +
                          +TotalOneTime)) /
                        (+e.target.value * +UnitsInOrder * +Orders)) *
                        100
                    );
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                TotalInPerOrder:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Math.round(TotalInPerOrder * 100) / 100}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                  disabled
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                RefFee:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Math.round(RefFee * 100) / 100}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                  disabled
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                MarginPerUnit:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Math.round(MarginPerUnit * 100) / 100}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                  disabled
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"%"}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                FBAFee:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Math.round(FBAFee * 100) / 100}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                  disabled
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                Orders:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Orders}
                  onChange={(e) => {
                    setOrders(Math.round(+e.target.value * 100) / 100);
                    setTotalSAAS(+e.target.value * OneOrderTimeSAAS);
                    setTotalIn(+TotalInPerOrder * +e.target.value);
                    setTotalOut(
                      +TotalOutPerOrder * +e.target.value +
                        +TotalOneTime +
                        +e.target.value * OneOrderTimeSAAS
                    );
                    setTotalProfit(
                      +TotalInPerOrder * +e.target.value -
                        (+TotalOutPerOrder * +e.target.value + +TotalOneTime)
                    );
                    setTotalMargin(
                      ((+TotalInPerOrder * +e.target.value -
                        (+TotalOutPerOrder * +e.target.value + +TotalOneTime)) /
                        (+TotalInPerOrder * +e.target.value)) *
                        100
                    );
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              ></td>
            </tr>
            <tr>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                TotalOutPerUnit:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Math.round(TotalOutPerUnit * 100) / 100}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                  disabled
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                TotalIn:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Math.round(TotalIn * 100) / 100}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                  disabled
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                OneOrderTimeSAAS:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={OneOrderTimeSAAS}
                  onChange={(e) => {
                    setOneOrderTimeSAAS(
                      Math.round(+e.target.value * 100) / 100
                    );
                    setTotalSAAS(+Orders * +e.target.value);
                    setTotalOutPerOrder(
                      +e.target.value +
                        +UnitsInOrder *
                          (+Manufacturing +
                            +Inspection +
                            +Packaging +
                            +Freights +
                            +Insert +
                            +PPC +
                            +RefFee +
                            +FBAFee)
                    );
                    setTotalOut(
                      +Orders *
                        (+e.target.value +
                          +UnitsInOrder *
                            (+Manufacturing +
                              +Inspection +
                              +Packaging +
                              +Freights +
                              +Insert +
                              +PPC +
                              +RefFee +
                              +FBAFee))
                    );
                    setTotalProfit(
                      TotalIn -
                        +Orders *
                          (+e.target.value +
                            +UnitsInOrder *
                              (+Manufacturing +
                                +Inspection +
                                +Packaging +
                                +Freights +
                                +Insert +
                                +PPC +
                                +RefFee +
                                +FBAFee))
                    );
                    setTotalMargin(
                      ((TotalIn -
                        +Orders *
                          (+e.target.value +
                            +UnitsInOrder *
                              (+Manufacturing +
                                +Inspection +
                                +Packaging +
                                +Freights +
                                +Insert +
                                +PPC +
                                +RefFee +
                                +FBAFee))) /
                        +TotalIn) *
                        100
                    );
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                TotalOut:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Math.round(TotalOut * 100) / 100}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                  disabled
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                TotalSAAS:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Math.round(TotalSAAS * 100) / 100}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                  disabled
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                TotalProfit:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Math.round(TotalProfit * 100) / 100}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                  disabled
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                LLC:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={LLC}
                  onChange={(e) => {
                    setLLC(Math.round(+e.target.value * 100) / 100);
                    setTotalOneTime(
                      +e.target.value +
                        +Trademark +
                        +Photographing +
                        +Unboxing +
                        +InsertDesign +
                        +PackagingDesign +
                        +Samples
                    );
                    setTotalOut(
                      +TotalOutPerOrder * +Orders +
                        (+e.target.value +
                          +Trademark +
                          +Photographing +
                          +Unboxing +
                          +InsertDesign +
                          +PackagingDesign +
                          +Samples)
                    );
                    setTotalProfit(
                      TotalIn -
                        (+TotalOutPerOrder * +Orders +
                          (+e.target.value +
                            +Trademark +
                            +Photographing +
                            +Unboxing +
                            +InsertDesign +
                            +PackagingDesign +
                            +Samples))
                    );
                    setTotalMargin(
                      ((TotalIn -
                        (+TotalOutPerOrder * +Orders +
                          (+e.target.value +
                            +Trademark +
                            +Photographing +
                            +Unboxing +
                            +InsertDesign +
                            +PackagingDesign +
                            +Samples))) /
                        +TotalIn) *
                        100
                    );
                  }}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"$"}
              </td>
              <td
                style={{
                  width: "154px",
                  color: "blue",
                  fontWeight: "bolder",
                }}
              >
                TotalMargin:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "left" }}
                  value={Math.round(TotalMargin * 100) / 100}
                  type="number"
                  min="0.00"
                  max="100000000.00"
                  step="0.01"
                  disabled
                />
              </td>
              <td
                style={{
                  width: "150px",
                  color: "blue",
                  fontWeight: "bolder",
                  paddingLeft: "20px",
                }}
              >
                {"%"}
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div
          style={{
            margin: "auto",
            backgroundColor: "#F0F0F0",
            paddingTop: "50px",
            padding: "50px",
            borderRadius: "100px",
          }}
        >
          <Chart data={data} />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default App;
