import { useTranslation } from 'react-i18next'
import { classNames, Select } from 'shared'
import { memo, useCallback } from 'react'
import { Currency } from '../model/types/currency.types'

interface ICurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const options = [
  { content: Currency.RUB, value: Currency.RUB },
  { content: Currency.EUR, value: Currency.EUR },
  { content: Currency.USD, value: Currency.USD },
]

export const CurrencySelect = memo(
  ({ className, onChange, value, readonly }: ICurrencySelectProps) => {
    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
      onChange?.(value as Currency)
    }, [])

    return (
      <Select
        className={classNames(undefined, {}, [className])}
        label={t('Укажите валюту')}
        options={options}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
      />
    )
  },
)
