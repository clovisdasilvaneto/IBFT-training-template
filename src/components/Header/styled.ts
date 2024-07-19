import styled from '@emotion/styled'

export const NavComponent = styled.nav`
    background-color: ${({ theme }) => theme.palette.dark.main};
    padding: 18px 150px;
    display: flex;
    position: sticky;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.palette.primary.light};
`

export const BrandImg = styled.img`
    width: 150px;
`

export const ClockTimeDiv = styled.div`
    color: ${({ theme }) => theme.palette.light.main};
    margin-left: auto;
`

export const TextCourse = styled.h1`
    font-size: 1.5em;
`