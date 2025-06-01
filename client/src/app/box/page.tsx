"use client"
import { useDispatch, useSelector } from "react-redux"
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Plus } from "lucide-react"

import {
  incrementHeight,
  incrementWidth,
  changeColor,
  incrementMarginLeft,
  incrementMarginRight,
  incrementMarginDown,
  incrementMarginTop,
  changeToCircle,
} from "@/redux/reducerSlices/boxSlice"

const Box = () => {
  const dispatch = useDispatch()
  const { backgroundColor, width, height, marginLeft, marginTop, borderRadius } = useSelector((state) => state.box)

  const generateArea = () => {
    if (borderRadius === "50%") {
    return Math.round((Math.PI * width * width) / 4)
    } else {
      return Math.round(width * height)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4">
      <div className="mx-auto max-w-2xl">
        <div className="bg-white rounded-lg shadow-sm border p-6 space-y-6">
          <h1 className="text-xl font-semibold text-center text-slate-800">Box Controller</h1>

          {/* Arrow Controls */}
          <div className="flex flex-col items-center space-y-2">
            <button
              className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center transition-colors"
              onClick={() => dispatch(incrementMarginTop())}
            >
              <ArrowUp size={16} />
            </button>

            <div className="flex space-x-2">
              <button
                className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center transition-colors"
                onClick={() => dispatch(incrementMarginLeft())}
              >
                <ArrowLeft size={16} />
              </button>
              <button
                className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center transition-colors"
                onClick={() => dispatch(incrementMarginDown())}
              >
                <ArrowDown size={16} />
              </button>
              <button
                className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center transition-colors"
                onClick={() => dispatch(incrementMarginRight())}
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Size Controls */}
          <div className="grid grid-cols-3 gap-3">
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors"
              onClick={() => dispatch(incrementHeight())}
            >
              <Plus size={16} /> Height
            </button>
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors"
              onClick={() => dispatch(incrementWidth())}
            >
              <Plus size={16} /> Width
            </button>
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg transition-colors"
              onClick={() => dispatch(changeToCircle())}
            >
              ⭕ Circle
            </button>
          </div>

          {/* Color Input */}
          <input
            type="text"
            placeholder="Enter color (red, #ff0000)"
            className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => dispatch(changeColor(e.target.value))}
          />

          {/* Area Display */}
          <div className="text-center">
            <span className="text-sm text-slate-600">Area: </span>
            <span className="text-lg font-medium text-slate-800">{generateArea()}</span>
          </div>

          {/* Preview */}
          <div className="flex justify-center p-8 bg-slate-50 rounded-lg">
            <div
              style={{
                backgroundColor: backgroundColor || "#e2e8f0",
                width,
                height,
                marginLeft,
                marginTop,
                borderRadius,
              }}
              className="transition-all duration-200 border border-slate-200"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Box
