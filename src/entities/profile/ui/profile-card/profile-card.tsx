import { useTranslation } from 'react-i18next'

import { Profile } from '../../model/type/profile'
import { Avatar, classNames, Input, Mods } from 'shared'
import { Text, TextAlign } from 'shared/ui/text'

import styles from './profile-card.module.scss'
import { Loader } from 'shared/ui/loader'
import { Currency, CurrencySelect } from 'entities/currency'
import { Country, CountrySelect } from 'entities/country'

interface ProfileCard {
  className?: string
  data?: Profile
  isLoading?: boolean
  readonly?: boolean
  error?: string
  onChangeFirstName?: (value: string) => void
  onChangeLastName?: (value: string) => void
  onChangeCity?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeUserName?: (value: string) => void
  onChangeAvatar?: (value: string) => void
  onChangeCurrency?: (value: Currency) => void
  onChangeCountry?: (value: Country) => void
}

export const ProfileCard = (props: ProfileCard) => {
  const {
    className,
    data,
    error,
    isLoading = false,
    readonly = false,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUserName,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props
  const { t } = useTranslation('profile')

  if (isLoading) {
    return (
      <div
        className={classNames(
          styles['profile-data'],
          {
            [styles.loading]: true,
          },
          [className],
        )}
      >
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div
        className={classNames(styles['profile-data'], {}, [
          className,
          styles['error'],
        ])}
      >
        <Text
          variant="error"
          title={t('Произошла ошибка')}
          text={t('Попробуйте перезагрузить страницу')}
          align={TextAlign.CENTER}
        />
      </div>
    )
  }

  const mods: Mods = {
    [styles['profile-data-editing-mode']]: !readonly,
  }

  return (
    <div className={classNames(styles['profile-data'], mods, [className])}>
      <div className={styles['profile-data-content']}>
        {data?.avatar && (
          <div className={styles['profile-data-avatar-wrapper']}>
            <Avatar src={data.avatar} />
          </div>
        )}
        <Input
          key={'name'}
          value={data?.firstname}
          placeholder={t('Ваше имя')}
          className={styles['profile-data-input']}
          onChange={onChangeFirstName}
          readOnly={readonly}
        />
        <Input
          key={'lastname'}
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          className={styles['profile-data-input']}
          onChange={onChangeLastName}
          readOnly={readonly}
        />
        <Input
          key={'city'}
          value={data?.city}
          placeholder={t('Ваш город')}
          className={styles['profile-data-input']}
          onChange={onChangeCity}
          readOnly={readonly}
        />
        <Input
          key={'age'}
          value={data?.age}
          type="number"
          placeholder={t('Ваш возраст')}
          className={styles['profile-data-input']}
          onChange={onChangeAge}
          readOnly={readonly}
        />
        <Input
          key={'username'}
          value={data?.username}
          type="number"
          placeholder={t('Ваш никнейм')}
          className={styles['profile-data-input']}
          onChange={onChangeUserName}
          readOnly={readonly}
        />
        <Input
          key={'avatar'}
          value={data?.age}
          type="number"
          placeholder={t('Введите ссылку на аватар')}
          className={styles['profile-data-input']}
          onChange={onChangeAvatar}
          readOnly={readonly}
        />
        <CurrencySelect
          onChange={onChangeCurrency}
          value={data?.currency}
          readonly={readonly}
        />
        <CountrySelect
          onChange={onChangeCountry}
          value={data?.country}
          readonly={readonly}
        />
      </div>
    </div>
  )
}
