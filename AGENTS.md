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

- All site imagery is served from the two Cloudinary photo URLs defined in
  `src/lib/images.ts` (doctor portrait `DOCTOR_IMAGE`, hospital facade
  `FACADE_IMAGE`). The project must not contain local or generated photo
  assets — the user asked for cloud-only imagery, so pages reference the
  shared constants instead of importing files from `src/assets/`.
