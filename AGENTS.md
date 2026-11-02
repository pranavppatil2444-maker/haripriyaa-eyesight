<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Imagery

- Site imagery is cloud-hosted via Lovable Assets (CDN): three pointers in
  `src/assets/*.asset.json` (doctor portrait, doctor consultation, hospital
  facade), surfaced through the constants in `src/lib/images.ts`
  (`DOCTOR_IMAGE`, `EXAM_IMAGE`, `FACADE_IMAGE`). No binary photo files live
  in the repo — the user asked for cloud-only imagery, so pages reference the
  shared constants instead of importing files from `src/assets/`.
