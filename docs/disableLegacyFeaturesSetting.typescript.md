# `disableLegacyFeaturesSetting` Submodule <a name="`disableLegacyFeaturesSetting` Submodule" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisableLegacyFeaturesSetting <a name="DisableLegacyFeaturesSetting" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/disable_legacy_features_setting databricks_disable_legacy_features_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer"></a>

```typescript
import { disableLegacyFeaturesSetting } from '@cdktn/provider-databricks'

new disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting(scope: Construct, id: string, config: DisableLegacyFeaturesSettingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig">DisableLegacyFeaturesSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig">DisableLegacyFeaturesSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.putDisableLegacyFeatures">putDisableLegacyFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetSettingName">resetSettingName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDisableLegacyFeatures` <a name="putDisableLegacyFeatures" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.putDisableLegacyFeatures"></a>

```typescript
public putDisableLegacyFeatures(value: DisableLegacyFeaturesSettingDisableLegacyFeatures): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.putDisableLegacyFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DisableLegacyFeaturesSettingProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig">DisableLegacyFeaturesSettingProviderConfig</a>

---

##### `resetEtag` <a name="resetEtag" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetEtag"></a>

```typescript
public resetEtag(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetSettingName` <a name="resetSettingName" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.resetSettingName"></a>

```typescript
public resetSettingName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DisableLegacyFeaturesSetting resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isConstruct"></a>

```typescript
import { disableLegacyFeaturesSetting } from '@cdktn/provider-databricks'

disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformElement"></a>

```typescript
import { disableLegacyFeaturesSetting } from '@cdktn/provider-databricks'

disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformResource"></a>

```typescript
import { disableLegacyFeaturesSetting } from '@cdktn/provider-databricks'

disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport"></a>

```typescript
import { disableLegacyFeaturesSetting } from '@cdktn/provider-databricks'

disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DisableLegacyFeaturesSetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DisableLegacyFeaturesSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DisableLegacyFeaturesSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/disable_legacy_features_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DisableLegacyFeaturesSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.disableLegacyFeatures">disableLegacyFeatures</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference">DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference">DisableLegacyFeaturesSettingProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.disableLegacyFeaturesInput">disableLegacyFeaturesInput</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.etagInput">etagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig">DisableLegacyFeaturesSettingProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.settingNameInput">settingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.settingName">settingName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `disableLegacyFeatures`<sup>Required</sup> <a name="disableLegacyFeatures" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.disableLegacyFeatures"></a>

```typescript
public readonly disableLegacyFeatures: DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference">DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.providerConfig"></a>

```typescript
public readonly providerConfig: DisableLegacyFeaturesSettingProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference">DisableLegacyFeaturesSettingProviderConfigOutputReference</a>

---

##### `disableLegacyFeaturesInput`<sup>Optional</sup> <a name="disableLegacyFeaturesInput" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.disableLegacyFeaturesInput"></a>

```typescript
public readonly disableLegacyFeaturesInput: DisableLegacyFeaturesSettingDisableLegacyFeatures;
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a>

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.etagInput"></a>

```typescript
public readonly etagInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: DisableLegacyFeaturesSettingProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig">DisableLegacyFeaturesSettingProviderConfig</a>

---

##### `settingNameInput`<sup>Optional</sup> <a name="settingNameInput" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.settingNameInput"></a>

```typescript
public readonly settingNameInput: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `settingName`<sup>Required</sup> <a name="settingName" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.settingName"></a>

```typescript
public readonly settingName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSetting.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DisableLegacyFeaturesSettingConfig <a name="DisableLegacyFeaturesSettingConfig" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.Initializer"></a>

```typescript
import { disableLegacyFeaturesSetting } from '@cdktn/provider-databricks'

const disableLegacyFeaturesSettingConfig: disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.disableLegacyFeatures">disableLegacyFeatures</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a></code> | disable_legacy_features block. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.etag">etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/disable_legacy_features_setting#etag DisableLegacyFeaturesSetting#etag}. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/disable_legacy_features_setting#id DisableLegacyFeaturesSetting#id}. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig">DisableLegacyFeaturesSettingProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.settingName">settingName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/disable_legacy_features_setting#setting_name DisableLegacyFeaturesSetting#setting_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `disableLegacyFeatures`<sup>Required</sup> <a name="disableLegacyFeatures" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.disableLegacyFeatures"></a>

```typescript
public readonly disableLegacyFeatures: DisableLegacyFeaturesSettingDisableLegacyFeatures;
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a>

disable_legacy_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/disable_legacy_features_setting#disable_legacy_features DisableLegacyFeaturesSetting#disable_legacy_features}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/disable_legacy_features_setting#etag DisableLegacyFeaturesSetting#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/disable_legacy_features_setting#id DisableLegacyFeaturesSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DisableLegacyFeaturesSettingProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig">DisableLegacyFeaturesSettingProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/disable_legacy_features_setting#provider_config DisableLegacyFeaturesSetting#provider_config}

---

##### `settingName`<sup>Optional</sup> <a name="settingName" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingConfig.property.settingName"></a>

```typescript
public readonly settingName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/disable_legacy_features_setting#setting_name DisableLegacyFeaturesSetting#setting_name}.

---

### DisableLegacyFeaturesSettingDisableLegacyFeatures <a name="DisableLegacyFeaturesSettingDisableLegacyFeatures" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures.Initializer"></a>

```typescript
import { disableLegacyFeaturesSetting } from '@cdktn/provider-databricks'

const disableLegacyFeaturesSettingDisableLegacyFeatures: disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures.property.value">value</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/disable_legacy_features_setting#value DisableLegacyFeaturesSetting#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures.property.value"></a>

```typescript
public readonly value: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/disable_legacy_features_setting#value DisableLegacyFeaturesSetting#value}.

---

### DisableLegacyFeaturesSettingProviderConfig <a name="DisableLegacyFeaturesSettingProviderConfig" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig.Initializer"></a>

```typescript
import { disableLegacyFeaturesSetting } from '@cdktn/provider-databricks'

const disableLegacyFeaturesSettingProviderConfig: disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/disable_legacy_features_setting#workspace_id DisableLegacyFeaturesSetting#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/disable_legacy_features_setting#workspace_id DisableLegacyFeaturesSetting#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference <a name="DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.Initializer"></a>

```typescript
import { disableLegacyFeaturesSetting } from '@cdktn/provider-databricks'

new disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.valueInput">valueInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.value">value</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.value"></a>

```typescript
public readonly value: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeaturesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DisableLegacyFeaturesSettingDisableLegacyFeatures;
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingDisableLegacyFeatures">DisableLegacyFeaturesSettingDisableLegacyFeatures</a>

---


### DisableLegacyFeaturesSettingProviderConfigOutputReference <a name="DisableLegacyFeaturesSettingProviderConfigOutputReference" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.Initializer"></a>

```typescript
import { disableLegacyFeaturesSetting } from '@cdktn/provider-databricks'

new disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig">DisableLegacyFeaturesSettingProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DisableLegacyFeaturesSettingProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.disableLegacyFeaturesSetting.DisableLegacyFeaturesSettingProviderConfig">DisableLegacyFeaturesSettingProviderConfig</a>

---



