import styled, { css } from "styled-components"

type ProfileImgProps = {
  profilePhotoURL?: string;
}

export const ProfileImg = styled.div<ProfileImgProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  ${({ profilePhotoURL }) => profilePhotoURL ? css`
    background: no-repeat center url('profilePhoto');
  ` : css`
    background: no-repeat center url('./no-profile-photo.svg');
  `}
  
  background-color: var(--neutral-line);

  .name {
    font-size: .5rem;
  }
`