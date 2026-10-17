# CTI Material Explorer — Data Dictionary

## 1. Purpose

This directory stores structured material data for CTI Material Explorer.

The target game version is CTI 0.46a. Game-specific facts must be verified before being treated as confirmed data.

## 2. Files

| File | Responsibility |
|---|---|
| `materials.json` | Material records, applicability, stats, effects, and verification status |
| `parts.json` | Part IDs and localized part names |
| `stats-definitions.json` | Definitions of material attributes |
| `sources.json` | Data source records |

## 3. Language Convention

Localized names use these language keys:

- `zh`: Chinese
- `es`: Spanish
- `en`: English

Use `null` when a translation has not been verified or supplied. Do not invent translations.

## 4. ID Convention

- Every material must have a unique `id`.
- Every part definition must have a unique `id`.
- Every stat definition must have a unique `id`.
- Every source record must have a unique `id`.
- IDs are stable internal identifiers and should not depend on localized display names.

## 5. Applicability

The `applicability` field in `materials.json` associates a material with one or more usage categories and part IDs.

Supported usage IDs:

- `armor`
- `tool`
- `ranged`
- `special`
- `other`

Part IDs must reference records defined in `parts.json`.

## 6. Stats and Sources

Material attributes are stored in the `stats` field.

Attribute IDs must reference definitions in `stats-definitions.json`.

Each attribute record must be traceable to one or more source IDs. Referenced source IDs must exist in `sources.json`.

Do not use an unverified source as proof that a game-specific value is correct.

## 7. Verification

The material-level `verification.status` records the overall verification state.

Use `unverified` for records whose game-specific information has not been confirmed.

Verification of JSON syntax does not prove that the recorded game data is accurate.

## 8. Data Quality Rules

- Use valid JSON syntax.
- Do not add comments to JSON files.
- Do not duplicate IDs within the same entity type.
- Do not reference undefined part, stat, or source IDs.
- Do not replace unknown values with zero.
- Keep source information for every verified attribute.
- Verify game-specific information against the intended CTI 0.46a version.
- Keep test fixtures clearly distinguishable from real game data.