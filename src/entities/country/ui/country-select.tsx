import { useTranslation } from 'react-i18next'
import { classNames, Listbox, Select } from 'shared'
import { Country } from '../model/types/country.types'
import { memo, useCallback } from 'react'

interface ICurrencySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

const options = [
  { content: Country.Russia, value: Country.Russia },
  { content: Country.Armenia, value: Country.Armenia },
  { content: Country.Belarus, value: Country.Belarus },
  { content: Country.Kazakhstan, value: Country.Kazakhstan },
  { content: Country.Ukraine, value: Country.Ukraine },
]

export const CountrySelect = memo(
  ({ className, onChange, value, readonly }: ICurrencySelectProps) => {
    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
      onChange?.(value as Country)
    }, [])

    return (
      <Listbox
        onChange={onChangeHandler}
        items={options}
        value={value}
        defaultValue="Выберите страну"
        className={classNames(undefined, {}, [className])}
        readonly={readonly}
        direction="bottom"
        label="Страна - "
      />
    )
  },
)
