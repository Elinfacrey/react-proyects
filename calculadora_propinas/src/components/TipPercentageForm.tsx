import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

  type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>
    tip:number
  }

//tener un name y value para que no se seleccionene todos a la misma vez
export default function TipPercentageForm({setTip,tip}:TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form>
        {tipOptions.map((tipOption) => (
            <div key={tipOption.id}>
                <label htmlFor={tipOption.id}>{tipOption.label}</label>
                <input 
                 id={tipOption.id}
                 type="radio"
                 name="tip"
                 value={tipOption.value} 
                 onChange = {e => setTip(+e.target.value)}
                 checked = {tipOption.value === tip}
                />
            </div>
        ))}
        <div></div>

      </form>
    </div>
  )
}
