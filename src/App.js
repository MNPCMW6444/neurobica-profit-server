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

  return (
    <>
      <h1 style={{ textAlign: "center" }}>PF PC(Profitability Calclator)</h1>
      <table style={{ marginLeft: "auto", marginRight: "auto" }}>
        <tbody style={{ textAlign: "center" }}>
          <tr>
            <div>
              <td
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
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
                        +PPC
                    );
                    setTotalOutPerUnit(
                      +e.target.value +
                        +Inspection +
                        +Packaging +
                        +Insert +
                        +PPC +
                        +RefFee +
                        +FBAFee
                    );
                    setTotalOutPerOrder(
                      +OneOrderTimeSAAS +
                        +UnitsInOrder *
                          (+Listing +
                            +e.target.value +
                            +Inspection +
                            +Packaging +
                            +Insert +
                            +PPC +
                            +RefFee +
                            +FBAFee)
                    );
                    setTotalOut(
                      +Orders *
                        (+UnitsInOrder *
                          (+Listing +
                            +e.target.value +
                            +Inspection +
                            +Packaging +
                            +Insert +
                            +PPC +
                            +RefFee +
                            +FBAFee))
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
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
                        +PPC
                    );
                    setTotalOutPerUnit(
                      +Manufacturing +
                        +e.target.value +
                        +Inspection +
                        +Packaging +
                        +Insert +
                        +PPC +
                        +RefFee +
                        +FBAFee
                    );
                    setTotalOutPerOrder(
                      +OneOrderTimeSAAS +
                        +UnitsInOrder *
                          (+Listing +
                            +Manufacturing +
                            +e.target.value +
                            +Inspection +
                            +Packaging +
                            +Insert +
                            +PPC +
                            +RefFee +
                            +FBAFee)
                    );
                    setTotalOut(
                      +Orders *
                        (+UnitsInOrder *
                          (+Listing +
                            +Manufacturing +
                            +e.target.value +
                            +Inspection +
                            +Packaging +
                            +Insert +
                            +PPC +
                            +RefFee +
                            +FBAFee))
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
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
                        +PPC
                    );
                    setTotalOutPerUnit(
                      +Manufacturing +
                        +Inspection +
                        +e.target.value +
                        +Packaging +
                        +Insert +
                        +PPC +
                        +RefFee +
                        +FBAFee
                    );
                    setTotalOutPerOrder(
                      +OneOrderTimeSAAS +
                        +UnitsInOrder *
                          (+Listing +
                            +Manufacturing +
                            +Inspection +
                            +e.target.value +
                            +Packaging +
                            +Insert +
                            +PPC +
                            +RefFee +
                            +FBAFee)
                    );
                    setTotalOut(
                      +Orders *
                        (+UnitsInOrder *
                          (+Listing +
                            +Manufacturing +
                            +Inspection +
                            +e.target.value +
                            +Packaging +
                            +Insert +
                            +PPC +
                            +RefFee +
                            +FBAFee))
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
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
                    setTotalOutPerOrder(
                      +OneOrderTimeSAAS +
                        +UnitsInOrder *
                          (+Listing +
                            +Manufacturing +
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
                        (+UnitsInOrder *
                          (+Listing +
                            +Manufacturing +
                            +Inspection +
                            +Packaging +
                            +e.target.value +
                            +Insert +
                            +PPC +
                            +RefFee +
                            +FBAFee))
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
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
                    setTotalOutPerOrder(
                      +OneOrderTimeSAAS +
                        +UnitsInOrder *
                          (+Listing +
                            +Manufacturing +
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
                        (+UnitsInOrder *
                          (+Listing +
                            +Manufacturing +
                            +Inspection +
                            +Packaging +
                            +Freights +
                            +e.target.value +
                            +PPC +
                            +RefFee +
                            +FBAFee))
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
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
                    setTotalOutPerOrder(
                      +OneOrderTimeSAAS +
                        +UnitsInOrder *
                          (+Listing +
                            +Manufacturing +
                            +Inspection +
                            +Packaging +
                            +Freights +
                            +Insert +
                            +e.target.value +
                            +RefFee +
                            +FBAFee)
                    );
                    setTotalOut(
                      +Orders *
                        (+UnitsInOrder *
                          (+Listing +
                            +Manufacturing +
                            +Inspection +
                            +Packaging +
                            +Freights +
                            +Insert +
                            +e.target.value +
                            +RefFee +
                            +FBAFee))
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
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
                    setFBAFee(0.25 * +e.target.value);
                    setTotalOutPerUnit(
                      +Listing +
                        +(0.15 * +e.target.value) +
                        +(0.25 * +e.target.value)
                    );
                    setTotalOutPerOrder(
                      +OneOrderTimeSAAS +
                        +UnitsInOrder *
                          (+Listing +
                            +(0.15 * +e.target.value) +
                            +(0.25 * +e.target.value))
                    );
                    setTotalInPerOrder(+UnitsInOrder * +e.target.value);
                    setTotalOut(+Orders * (+UnitsInOrder * +e.target.value));
                    setTotalIn(+e.target.value * +UnitsInOrder * +Orders);
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
              >
                OneOrderTimeSAAS:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(OneOrderTimeSAAS * 100) / 100}
                  onChange={(e) => {
                    setOneOrderTimeSAAS(+e.target.value);
                    setTotalSAAS(+Orders * +e.target.value);
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
              >
                TotalSAAS:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(TotalSAAS * 100) / 100}
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
              >
                UnitsInOrder:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(UnitsInOrder * 100) / 100}
                  onChange={(e) => {
                    setUnitsInOrder(+e.target.value);
                    setTotalOutPerOrder(
                      +OneOrderTimeSAAS + +e.target.value * +TotalOutPerUnit
                    );
                    setTotalInPerOrder(+e.target.value * +Revenue);
                    setMarginPerUnit(
                      ((+e.target.value * +Revenue -
                        +e.target.value * +TotalOutPerUnit) /
                        (+e.target.value * +Revenue)) *
                        100
                    );
                    setTotalIn(+e.target.value * +Revenue * +Orders);
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
                {" "}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
              >
                TotalInPerOrder:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(TotalInPerOrder * 100) / 100}
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
              >
                MarginPerUnit:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(MarginPerUnit * 100) / 100}
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
                {"%"}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
              >
                Orders:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(Orders * 100) / 100}
                  onChange={(e) => {
                    setOrders(+e.target.value);
                    setTotalIn(+TotalInPerOrder * +e.target.value);
                    setTotalOut(
                      +TotalOutPerOrder * +e.target.value + +TotalOneTime
                    );
                    setTotalProfit(
                      +TotalInPerOrder * +e.target.value -
                        (+TotalOutPerOrder * +e.target.value + +TotalOneTime)
                    );
                    setTotalMargin(
                      +TotalInPerOrder * +e.target.value -
                        ((+TotalOutPerOrder * +e.target.value + +TotalOneTime) /
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
                style={{ width: "30px", color: "blue", fontWeight: "bolder" }}
              >
                {" "}
              </td>
            </div>
          </tr>
          <tr>
            <div style={{ textAlign: "center" }}>
              <td
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
              >
                TotalIn:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(TotalIn * 100) / 100}
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
              >
                TotalOut:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(TotalOut * 100) / 100}
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
              >
                TotalProfit:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(TotalProfit * 100) / 100}
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
                style={{ width: "154px", color: "blue", fontWeight: "bolder" }}
              >
                TotalMargin:
              </td>
              <td style={{ color: "blue", fontWeight: "bolder" }}>
                <input
                  style={{ width: "80px", textAlign: "center" }}
                  value={parseInt(TotalMargin * 100) / 100}
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
                {"%"}
              </td>
            </div>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
