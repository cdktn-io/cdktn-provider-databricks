# `lakewatchAlertConfig` Submodule <a name="`lakewatchAlertConfig` Submodule" id="@cdktn/provider-databricks.lakewatchAlertConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakewatchAlertConfig <a name="LakewatchAlertConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config databricks_lakewatch_alert_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

new lakewatchAlertConfig.LakewatchAlertConfig(scope: Construct, id: string, config: LakewatchAlertConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig">LakewatchAlertConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig">LakewatchAlertConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSecurityAlertExportConfig">putSecurityAlertExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSystemAlertExportConfig">putSystemAlertExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetDefaultSecurityAlertCollationWindow">resetDefaultSecurityAlertCollationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetDefaultSystemAlertCollationWindow">resetDefaultSystemAlertCollationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetSecurityAlertExportConfig">resetSecurityAlertExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetSystemAlertExportConfig">resetSystemAlertExportConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putProviderConfig"></a>

```typescript
public putProviderConfig(value: LakewatchAlertConfigProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig">LakewatchAlertConfigProviderConfig</a>

---

##### `putSecurityAlertExportConfig` <a name="putSecurityAlertExportConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSecurityAlertExportConfig"></a>

```typescript
public putSecurityAlertExportConfig(value: LakewatchAlertConfigSecurityAlertExportConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSecurityAlertExportConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig">LakewatchAlertConfigSecurityAlertExportConfig</a>

---

##### `putSystemAlertExportConfig` <a name="putSystemAlertExportConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSystemAlertExportConfig"></a>

```typescript
public putSystemAlertExportConfig(value: LakewatchAlertConfigSystemAlertExportConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.putSystemAlertExportConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig">LakewatchAlertConfigSystemAlertExportConfig</a>

---

##### `resetDefaultSecurityAlertCollationWindow` <a name="resetDefaultSecurityAlertCollationWindow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetDefaultSecurityAlertCollationWindow"></a>

```typescript
public resetDefaultSecurityAlertCollationWindow(): void
```

##### `resetDefaultSystemAlertCollationWindow` <a name="resetDefaultSystemAlertCollationWindow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetDefaultSystemAlertCollationWindow"></a>

```typescript
public resetDefaultSystemAlertCollationWindow(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetSecurityAlertExportConfig` <a name="resetSecurityAlertExportConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetSecurityAlertExportConfig"></a>

```typescript
public resetSecurityAlertExportConfig(): void
```

##### `resetSystemAlertExportConfig` <a name="resetSystemAlertExportConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.resetSystemAlertExportConfig"></a>

```typescript
public resetSystemAlertExportConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LakewatchAlertConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isConstruct"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

lakewatchAlertConfig.LakewatchAlertConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isTerraformElement"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

lakewatchAlertConfig.LakewatchAlertConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isTerraformResource"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

lakewatchAlertConfig.LakewatchAlertConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.generateConfigForImport"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

lakewatchAlertConfig.LakewatchAlertConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LakewatchAlertConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LakewatchAlertConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LakewatchAlertConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LakewatchAlertConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.effectiveDefaultSecurityAlertCollationWindow">effectiveDefaultSecurityAlertCollationWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.effectiveDefaultSystemAlertCollationWindow">effectiveDefaultSystemAlertCollationWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference">LakewatchAlertConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.securityAlertExportConfig">securityAlertExportConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference">LakewatchAlertConfigSecurityAlertExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.systemAlertExportConfig">systemAlertExportConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference">LakewatchAlertConfigSystemAlertExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.updatedBy">updatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference">LakewatchAlertConfigUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.defaultSecurityAlertCollationWindowInput">defaultSecurityAlertCollationWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.defaultSystemAlertCollationWindowInput">defaultSystemAlertCollationWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig">LakewatchAlertConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.securityAlertExportConfigInput">securityAlertExportConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig">LakewatchAlertConfigSecurityAlertExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.systemAlertExportConfigInput">systemAlertExportConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig">LakewatchAlertConfigSystemAlertExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.defaultSecurityAlertCollationWindow">defaultSecurityAlertCollationWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.defaultSystemAlertCollationWindow">defaultSystemAlertCollationWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `effectiveDefaultSecurityAlertCollationWindow`<sup>Required</sup> <a name="effectiveDefaultSecurityAlertCollationWindow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.effectiveDefaultSecurityAlertCollationWindow"></a>

```typescript
public readonly effectiveDefaultSecurityAlertCollationWindow: string;
```

- *Type:* string

---

##### `effectiveDefaultSystemAlertCollationWindow`<sup>Required</sup> <a name="effectiveDefaultSystemAlertCollationWindow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.effectiveDefaultSystemAlertCollationWindow"></a>

```typescript
public readonly effectiveDefaultSystemAlertCollationWindow: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: LakewatchAlertConfigProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference">LakewatchAlertConfigProviderConfigOutputReference</a>

---

##### `securityAlertExportConfig`<sup>Required</sup> <a name="securityAlertExportConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.securityAlertExportConfig"></a>

```typescript
public readonly securityAlertExportConfig: LakewatchAlertConfigSecurityAlertExportConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference">LakewatchAlertConfigSecurityAlertExportConfigOutputReference</a>

---

##### `systemAlertExportConfig`<sup>Required</sup> <a name="systemAlertExportConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.systemAlertExportConfig"></a>

```typescript
public readonly systemAlertExportConfig: LakewatchAlertConfigSystemAlertExportConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference">LakewatchAlertConfigSystemAlertExportConfigOutputReference</a>

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.updatedBy"></a>

```typescript
public readonly updatedBy: LakewatchAlertConfigUpdatedByOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference">LakewatchAlertConfigUpdatedByOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `defaultSecurityAlertCollationWindowInput`<sup>Optional</sup> <a name="defaultSecurityAlertCollationWindowInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.defaultSecurityAlertCollationWindowInput"></a>

```typescript
public readonly defaultSecurityAlertCollationWindowInput: string;
```

- *Type:* string

---

##### `defaultSystemAlertCollationWindowInput`<sup>Optional</sup> <a name="defaultSystemAlertCollationWindowInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.defaultSystemAlertCollationWindowInput"></a>

```typescript
public readonly defaultSystemAlertCollationWindowInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | LakewatchAlertConfigProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig">LakewatchAlertConfigProviderConfig</a>

---

##### `securityAlertExportConfigInput`<sup>Optional</sup> <a name="securityAlertExportConfigInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.securityAlertExportConfigInput"></a>

```typescript
public readonly securityAlertExportConfigInput: IResolvable | LakewatchAlertConfigSecurityAlertExportConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig">LakewatchAlertConfigSecurityAlertExportConfig</a>

---

##### `systemAlertExportConfigInput`<sup>Optional</sup> <a name="systemAlertExportConfigInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.systemAlertExportConfigInput"></a>

```typescript
public readonly systemAlertExportConfigInput: IResolvable | LakewatchAlertConfigSystemAlertExportConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig">LakewatchAlertConfigSystemAlertExportConfig</a>

---

##### `defaultSecurityAlertCollationWindow`<sup>Required</sup> <a name="defaultSecurityAlertCollationWindow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.defaultSecurityAlertCollationWindow"></a>

```typescript
public readonly defaultSecurityAlertCollationWindow: string;
```

- *Type:* string

---

##### `defaultSystemAlertCollationWindow`<sup>Required</sup> <a name="defaultSystemAlertCollationWindow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.defaultSystemAlertCollationWindow"></a>

```typescript
public readonly defaultSystemAlertCollationWindow: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakewatchAlertConfigConfig <a name="LakewatchAlertConfigConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

const lakewatchAlertConfigConfig: lakewatchAlertConfig.LakewatchAlertConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#parent LakewatchAlertConfig#parent}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.defaultSecurityAlertCollationWindow">defaultSecurityAlertCollationWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_security_alert_collation_window LakewatchAlertConfig#default_security_alert_collation_window}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.defaultSystemAlertCollationWindow">defaultSystemAlertCollationWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_system_alert_collation_window LakewatchAlertConfig#default_system_alert_collation_window}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig">LakewatchAlertConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#provider_config LakewatchAlertConfig#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.securityAlertExportConfig">securityAlertExportConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig">LakewatchAlertConfigSecurityAlertExportConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#security_alert_export_config LakewatchAlertConfig#security_alert_export_config}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.systemAlertExportConfig">systemAlertExportConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig">LakewatchAlertConfigSystemAlertExportConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#system_alert_export_config LakewatchAlertConfig#system_alert_export_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#parent LakewatchAlertConfig#parent}.

---

##### `defaultSecurityAlertCollationWindow`<sup>Optional</sup> <a name="defaultSecurityAlertCollationWindow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.defaultSecurityAlertCollationWindow"></a>

```typescript
public readonly defaultSecurityAlertCollationWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_security_alert_collation_window LakewatchAlertConfig#default_security_alert_collation_window}.

---

##### `defaultSystemAlertCollationWindow`<sup>Optional</sup> <a name="defaultSystemAlertCollationWindow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.defaultSystemAlertCollationWindow"></a>

```typescript
public readonly defaultSystemAlertCollationWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_system_alert_collation_window LakewatchAlertConfig#default_system_alert_collation_window}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: LakewatchAlertConfigProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig">LakewatchAlertConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#provider_config LakewatchAlertConfig#provider_config}.

---

##### `securityAlertExportConfig`<sup>Optional</sup> <a name="securityAlertExportConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.securityAlertExportConfig"></a>

```typescript
public readonly securityAlertExportConfig: LakewatchAlertConfigSecurityAlertExportConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig">LakewatchAlertConfigSecurityAlertExportConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#security_alert_export_config LakewatchAlertConfig#security_alert_export_config}.

---

##### `systemAlertExportConfig`<sup>Optional</sup> <a name="systemAlertExportConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigConfig.property.systemAlertExportConfig"></a>

```typescript
public readonly systemAlertExportConfig: LakewatchAlertConfigSystemAlertExportConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig">LakewatchAlertConfigSystemAlertExportConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#system_alert_export_config LakewatchAlertConfig#system_alert_export_config}.

---

### LakewatchAlertConfigProviderConfig <a name="LakewatchAlertConfigProviderConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

const lakewatchAlertConfigProviderConfig: lakewatchAlertConfig.LakewatchAlertConfigProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#workspace_id LakewatchAlertConfig#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#workspace_id LakewatchAlertConfig#workspace_id}.

---

### LakewatchAlertConfigSecurityAlertExportConfig <a name="LakewatchAlertConfigSecurityAlertExportConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

const lakewatchAlertConfigSecurityAlertExportConfig: lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#enabled LakewatchAlertConfig#enabled}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.jira">jira</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira">LakewatchAlertConfigSecurityAlertExportConfigJira</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#jira LakewatchAlertConfig#jira}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow">LakewatchAlertConfigSecurityAlertExportConfigServiceNow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#service_now LakewatchAlertConfig#service_now}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack">LakewatchAlertConfigSecurityAlertExportConfigSlack</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#slack LakewatchAlertConfig#slack}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.tines">tines</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines">LakewatchAlertConfigSecurityAlertExportConfigTines</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#tines LakewatchAlertConfig#tines}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.webhook">webhook</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook">LakewatchAlertConfigSecurityAlertExportConfigWebhook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook LakewatchAlertConfig#webhook}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#workspace_id LakewatchAlertConfig#workspace_id}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#enabled LakewatchAlertConfig#enabled}.

---

##### `jira`<sup>Optional</sup> <a name="jira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.jira"></a>

```typescript
public readonly jira: LakewatchAlertConfigSecurityAlertExportConfigJira;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira">LakewatchAlertConfigSecurityAlertExportConfigJira</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#jira LakewatchAlertConfig#jira}.

---

##### `serviceNow`<sup>Optional</sup> <a name="serviceNow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.serviceNow"></a>

```typescript
public readonly serviceNow: LakewatchAlertConfigSecurityAlertExportConfigServiceNow;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow">LakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#service_now LakewatchAlertConfig#service_now}.

---

##### `slack`<sup>Optional</sup> <a name="slack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.slack"></a>

```typescript
public readonly slack: LakewatchAlertConfigSecurityAlertExportConfigSlack;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack">LakewatchAlertConfigSecurityAlertExportConfigSlack</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#slack LakewatchAlertConfig#slack}.

---

##### `tines`<sup>Optional</sup> <a name="tines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.tines"></a>

```typescript
public readonly tines: LakewatchAlertConfigSecurityAlertExportConfigTines;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines">LakewatchAlertConfigSecurityAlertExportConfigTines</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#tines LakewatchAlertConfig#tines}.

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.webhook"></a>

```typescript
public readonly webhook: LakewatchAlertConfigSecurityAlertExportConfigWebhook;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook">LakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook LakewatchAlertConfig#webhook}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#workspace_id LakewatchAlertConfig#workspace_id}.

---

### LakewatchAlertConfigSecurityAlertExportConfigJira <a name="LakewatchAlertConfigSecurityAlertExportConfigJira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

const lakewatchAlertConfigSecurityAlertExportConfigJira: lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.apiTokenUcSecret">apiTokenUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#api_token_uc_secret LakewatchAlertConfig#api_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.defaultIssueType">defaultIssueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_issue_type LakewatchAlertConfig#default_issue_type}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.instanceUrl">instanceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_url LakewatchAlertConfig#instance_url}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.projectKey">projectKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#project_key LakewatchAlertConfig#project_key}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.userEmail">userEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#user_email LakewatchAlertConfig#user_email}. |

---

##### `apiTokenUcSecret`<sup>Required</sup> <a name="apiTokenUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.apiTokenUcSecret"></a>

```typescript
public readonly apiTokenUcSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#api_token_uc_secret LakewatchAlertConfig#api_token_uc_secret}.

---

##### `defaultIssueType`<sup>Required</sup> <a name="defaultIssueType" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.defaultIssueType"></a>

```typescript
public readonly defaultIssueType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_issue_type LakewatchAlertConfig#default_issue_type}.

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.instanceUrl"></a>

```typescript
public readonly instanceUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_url LakewatchAlertConfig#instance_url}.

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#project_key LakewatchAlertConfig#project_key}.

---

##### `userEmail`<sup>Required</sup> <a name="userEmail" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira.property.userEmail"></a>

```typescript
public readonly userEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#user_email LakewatchAlertConfig#user_email}.

---

### LakewatchAlertConfigSecurityAlertExportConfigServiceNow <a name="LakewatchAlertConfigSecurityAlertExportConfigServiceNow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

const lakewatchAlertConfigSecurityAlertExportConfigServiceNow: lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_id LakewatchAlertConfig#client_id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientSecretUcSecret">clientSecretUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_secret_uc_secret LakewatchAlertConfig#client_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_id LakewatchAlertConfig#instance_id}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_id LakewatchAlertConfig#client_id}.

---

##### `clientSecretUcSecret`<sup>Required</sup> <a name="clientSecretUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientSecretUcSecret"></a>

```typescript
public readonly clientSecretUcSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_secret_uc_secret LakewatchAlertConfig#client_secret_uc_secret}.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_id LakewatchAlertConfig#instance_id}.

---

### LakewatchAlertConfigSecurityAlertExportConfigSlack <a name="LakewatchAlertConfigSecurityAlertExportConfigSlack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

const lakewatchAlertConfigSecurityAlertExportConfigSlack: lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack.property.botTokenUcSecret">botTokenUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#bot_token_uc_secret LakewatchAlertConfig#bot_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack.property.channel">channel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#channel LakewatchAlertConfig#channel}. |

---

##### `botTokenUcSecret`<sup>Required</sup> <a name="botTokenUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack.property.botTokenUcSecret"></a>

```typescript
public readonly botTokenUcSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#bot_token_uc_secret LakewatchAlertConfig#bot_token_uc_secret}.

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#channel LakewatchAlertConfig#channel}.

---

### LakewatchAlertConfigSecurityAlertExportConfigTines <a name="LakewatchAlertConfigSecurityAlertExportConfigTines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

const lakewatchAlertConfigSecurityAlertExportConfigTines: lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookSecretUcSecret">webhookSecretUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_secret_uc_secret LakewatchAlertConfig#webhook_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookUri">webhookUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_uri LakewatchAlertConfig#webhook_uri}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines.property.exportUpdates">exportUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}. |

---

##### `webhookSecretUcSecret`<sup>Required</sup> <a name="webhookSecretUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookSecretUcSecret"></a>

```typescript
public readonly webhookSecretUcSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_secret_uc_secret LakewatchAlertConfig#webhook_secret_uc_secret}.

---

##### `webhookUri`<sup>Required</sup> <a name="webhookUri" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookUri"></a>

```typescript
public readonly webhookUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_uri LakewatchAlertConfig#webhook_uri}.

---

##### `exportUpdates`<sup>Optional</sup> <a name="exportUpdates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines.property.exportUpdates"></a>

```typescript
public readonly exportUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}.

---

### LakewatchAlertConfigSecurityAlertExportConfigWebhook <a name="LakewatchAlertConfigSecurityAlertExportConfigWebhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

const lakewatchAlertConfigSecurityAlertExportConfigWebhook: lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook.property.exportUpdates">exportUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#url LakewatchAlertConfig#url}. |

---

##### `exportUpdates`<sup>Optional</sup> <a name="exportUpdates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook.property.exportUpdates"></a>

```typescript
public readonly exportUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#url LakewatchAlertConfig#url}.

---

### LakewatchAlertConfigSystemAlertExportConfig <a name="LakewatchAlertConfigSystemAlertExportConfig" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

const lakewatchAlertConfigSystemAlertExportConfig: lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#enabled LakewatchAlertConfig#enabled}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.jira">jira</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira">LakewatchAlertConfigSystemAlertExportConfigJira</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#jira LakewatchAlertConfig#jira}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow">LakewatchAlertConfigSystemAlertExportConfigServiceNow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#service_now LakewatchAlertConfig#service_now}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack">LakewatchAlertConfigSystemAlertExportConfigSlack</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#slack LakewatchAlertConfig#slack}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.tines">tines</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines">LakewatchAlertConfigSystemAlertExportConfigTines</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#tines LakewatchAlertConfig#tines}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.webhook">webhook</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook">LakewatchAlertConfigSystemAlertExportConfigWebhook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook LakewatchAlertConfig#webhook}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#workspace_id LakewatchAlertConfig#workspace_id}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#enabled LakewatchAlertConfig#enabled}.

---

##### `jira`<sup>Optional</sup> <a name="jira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.jira"></a>

```typescript
public readonly jira: LakewatchAlertConfigSystemAlertExportConfigJira;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira">LakewatchAlertConfigSystemAlertExportConfigJira</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#jira LakewatchAlertConfig#jira}.

---

##### `serviceNow`<sup>Optional</sup> <a name="serviceNow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.serviceNow"></a>

```typescript
public readonly serviceNow: LakewatchAlertConfigSystemAlertExportConfigServiceNow;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow">LakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#service_now LakewatchAlertConfig#service_now}.

---

##### `slack`<sup>Optional</sup> <a name="slack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.slack"></a>

```typescript
public readonly slack: LakewatchAlertConfigSystemAlertExportConfigSlack;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack">LakewatchAlertConfigSystemAlertExportConfigSlack</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#slack LakewatchAlertConfig#slack}.

---

##### `tines`<sup>Optional</sup> <a name="tines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.tines"></a>

```typescript
public readonly tines: LakewatchAlertConfigSystemAlertExportConfigTines;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines">LakewatchAlertConfigSystemAlertExportConfigTines</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#tines LakewatchAlertConfig#tines}.

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.webhook"></a>

```typescript
public readonly webhook: LakewatchAlertConfigSystemAlertExportConfigWebhook;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook">LakewatchAlertConfigSystemAlertExportConfigWebhook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook LakewatchAlertConfig#webhook}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#workspace_id LakewatchAlertConfig#workspace_id}.

---

### LakewatchAlertConfigSystemAlertExportConfigJira <a name="LakewatchAlertConfigSystemAlertExportConfigJira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

const lakewatchAlertConfigSystemAlertExportConfigJira: lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.apiTokenUcSecret">apiTokenUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#api_token_uc_secret LakewatchAlertConfig#api_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.defaultIssueType">defaultIssueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_issue_type LakewatchAlertConfig#default_issue_type}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.instanceUrl">instanceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_url LakewatchAlertConfig#instance_url}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.projectKey">projectKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#project_key LakewatchAlertConfig#project_key}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.userEmail">userEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#user_email LakewatchAlertConfig#user_email}. |

---

##### `apiTokenUcSecret`<sup>Required</sup> <a name="apiTokenUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.apiTokenUcSecret"></a>

```typescript
public readonly apiTokenUcSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#api_token_uc_secret LakewatchAlertConfig#api_token_uc_secret}.

---

##### `defaultIssueType`<sup>Required</sup> <a name="defaultIssueType" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.defaultIssueType"></a>

```typescript
public readonly defaultIssueType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#default_issue_type LakewatchAlertConfig#default_issue_type}.

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.instanceUrl"></a>

```typescript
public readonly instanceUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_url LakewatchAlertConfig#instance_url}.

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#project_key LakewatchAlertConfig#project_key}.

---

##### `userEmail`<sup>Required</sup> <a name="userEmail" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira.property.userEmail"></a>

```typescript
public readonly userEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#user_email LakewatchAlertConfig#user_email}.

---

### LakewatchAlertConfigSystemAlertExportConfigServiceNow <a name="LakewatchAlertConfigSystemAlertExportConfigServiceNow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

const lakewatchAlertConfigSystemAlertExportConfigServiceNow: lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_id LakewatchAlertConfig#client_id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientSecretUcSecret">clientSecretUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_secret_uc_secret LakewatchAlertConfig#client_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_id LakewatchAlertConfig#instance_id}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_id LakewatchAlertConfig#client_id}.

---

##### `clientSecretUcSecret`<sup>Required</sup> <a name="clientSecretUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientSecretUcSecret"></a>

```typescript
public readonly clientSecretUcSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#client_secret_uc_secret LakewatchAlertConfig#client_secret_uc_secret}.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#instance_id LakewatchAlertConfig#instance_id}.

---

### LakewatchAlertConfigSystemAlertExportConfigSlack <a name="LakewatchAlertConfigSystemAlertExportConfigSlack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

const lakewatchAlertConfigSystemAlertExportConfigSlack: lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack.property.botTokenUcSecret">botTokenUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#bot_token_uc_secret LakewatchAlertConfig#bot_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack.property.channel">channel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#channel LakewatchAlertConfig#channel}. |

---

##### `botTokenUcSecret`<sup>Required</sup> <a name="botTokenUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack.property.botTokenUcSecret"></a>

```typescript
public readonly botTokenUcSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#bot_token_uc_secret LakewatchAlertConfig#bot_token_uc_secret}.

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#channel LakewatchAlertConfig#channel}.

---

### LakewatchAlertConfigSystemAlertExportConfigTines <a name="LakewatchAlertConfigSystemAlertExportConfigTines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

const lakewatchAlertConfigSystemAlertExportConfigTines: lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines.property.webhookSecretUcSecret">webhookSecretUcSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_secret_uc_secret LakewatchAlertConfig#webhook_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines.property.webhookUri">webhookUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_uri LakewatchAlertConfig#webhook_uri}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines.property.exportUpdates">exportUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}. |

---

##### `webhookSecretUcSecret`<sup>Required</sup> <a name="webhookSecretUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines.property.webhookSecretUcSecret"></a>

```typescript
public readonly webhookSecretUcSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_secret_uc_secret LakewatchAlertConfig#webhook_secret_uc_secret}.

---

##### `webhookUri`<sup>Required</sup> <a name="webhookUri" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines.property.webhookUri"></a>

```typescript
public readonly webhookUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#webhook_uri LakewatchAlertConfig#webhook_uri}.

---

##### `exportUpdates`<sup>Optional</sup> <a name="exportUpdates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines.property.exportUpdates"></a>

```typescript
public readonly exportUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}.

---

### LakewatchAlertConfigSystemAlertExportConfigWebhook <a name="LakewatchAlertConfigSystemAlertExportConfigWebhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

const lakewatchAlertConfigSystemAlertExportConfigWebhook: lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook.property.exportUpdates">exportUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#url LakewatchAlertConfig#url}. |

---

##### `exportUpdates`<sup>Optional</sup> <a name="exportUpdates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook.property.exportUpdates"></a>

```typescript
public readonly exportUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#export_updates LakewatchAlertConfig#export_updates}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#url LakewatchAlertConfig#url}.

---

### LakewatchAlertConfigUpdatedBy <a name="LakewatchAlertConfigUpdatedBy" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

const lakewatchAlertConfigUpdatedBy: lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#display_name LakewatchAlertConfig#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#email LakewatchAlertConfig#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#id LakewatchAlertConfig#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.property.principalType">principalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#principal_type LakewatchAlertConfig#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#display_name LakewatchAlertConfig#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#email LakewatchAlertConfig#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#id LakewatchAlertConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_alert_config#principal_type LakewatchAlertConfig#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakewatchAlertConfigProviderConfigOutputReference <a name="LakewatchAlertConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

new lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig">LakewatchAlertConfigProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchAlertConfigProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigProviderConfig">LakewatchAlertConfigProviderConfig</a>

---


### LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference <a name="LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

new lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput">apiTokenUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput">defaultIssueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrlInput">instanceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKeyInput">projectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmailInput">userEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecret">apiTokenUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueType">defaultIssueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrl">instanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKey">projectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmail">userEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira">LakewatchAlertConfigSecurityAlertExportConfigJira</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiTokenUcSecretInput`<sup>Optional</sup> <a name="apiTokenUcSecretInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput"></a>

```typescript
public readonly apiTokenUcSecretInput: string;
```

- *Type:* string

---

##### `defaultIssueTypeInput`<sup>Optional</sup> <a name="defaultIssueTypeInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput"></a>

```typescript
public readonly defaultIssueTypeInput: string;
```

- *Type:* string

---

##### `instanceUrlInput`<sup>Optional</sup> <a name="instanceUrlInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrlInput"></a>

```typescript
public readonly instanceUrlInput: string;
```

- *Type:* string

---

##### `projectKeyInput`<sup>Optional</sup> <a name="projectKeyInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKeyInput"></a>

```typescript
public readonly projectKeyInput: string;
```

- *Type:* string

---

##### `userEmailInput`<sup>Optional</sup> <a name="userEmailInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmailInput"></a>

```typescript
public readonly userEmailInput: string;
```

- *Type:* string

---

##### `apiTokenUcSecret`<sup>Required</sup> <a name="apiTokenUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecret"></a>

```typescript
public readonly apiTokenUcSecret: string;
```

- *Type:* string

---

##### `defaultIssueType`<sup>Required</sup> <a name="defaultIssueType" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueType"></a>

```typescript
public readonly defaultIssueType: string;
```

- *Type:* string

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrl"></a>

```typescript
public readonly instanceUrl: string;
```

- *Type:* string

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

---

##### `userEmail`<sup>Required</sup> <a name="userEmail" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmail"></a>

```typescript
public readonly userEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchAlertConfigSecurityAlertExportConfigJira;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira">LakewatchAlertConfigSecurityAlertExportConfigJira</a>

---


### LakewatchAlertConfigSecurityAlertExportConfigOutputReference <a name="LakewatchAlertConfigSecurityAlertExportConfigOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

new lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira">putJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow">putServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putSlack">putSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines">putTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putWebhook">putWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetJira">resetJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetServiceNow">resetServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetSlack">resetSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetTines">resetTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWebhook">resetWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJira` <a name="putJira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira"></a>

```typescript
public putJira(value: LakewatchAlertConfigSecurityAlertExportConfigJira): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira">LakewatchAlertConfigSecurityAlertExportConfigJira</a>

---

##### `putServiceNow` <a name="putServiceNow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow"></a>

```typescript
public putServiceNow(value: LakewatchAlertConfigSecurityAlertExportConfigServiceNow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow">LakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

---

##### `putSlack` <a name="putSlack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putSlack"></a>

```typescript
public putSlack(value: LakewatchAlertConfigSecurityAlertExportConfigSlack): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putSlack.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack">LakewatchAlertConfigSecurityAlertExportConfigSlack</a>

---

##### `putTines` <a name="putTines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines"></a>

```typescript
public putTines(value: LakewatchAlertConfigSecurityAlertExportConfigTines): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines">LakewatchAlertConfigSecurityAlertExportConfigTines</a>

---

##### `putWebhook` <a name="putWebhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putWebhook"></a>

```typescript
public putWebhook(value: LakewatchAlertConfigSecurityAlertExportConfigWebhook): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.putWebhook.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook">LakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetJira` <a name="resetJira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetJira"></a>

```typescript
public resetJira(): void
```

##### `resetServiceNow` <a name="resetServiceNow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetServiceNow"></a>

```typescript
public resetServiceNow(): void
```

##### `resetSlack` <a name="resetSlack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetSlack"></a>

```typescript
public resetSlack(): void
```

##### `resetTines` <a name="resetTines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetTines"></a>

```typescript
public resetTines(): void
```

##### `resetWebhook` <a name="resetWebhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWebhook"></a>

```typescript
public resetWebhook(): void
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jira">jira</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference">LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference">LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference">LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tines">tines</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference">LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhook">webhook</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference">LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jiraInput">jiraInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira">LakewatchAlertConfigSecurityAlertExportConfigJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNowInput">serviceNowInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow">LakewatchAlertConfigSecurityAlertExportConfigServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slackInput">slackInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack">LakewatchAlertConfigSecurityAlertExportConfigSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tinesInput">tinesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines">LakewatchAlertConfigSecurityAlertExportConfigTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhookInput">webhookInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook">LakewatchAlertConfigSecurityAlertExportConfigWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig">LakewatchAlertConfigSecurityAlertExportConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jira`<sup>Required</sup> <a name="jira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jira"></a>

```typescript
public readonly jira: LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference">LakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference</a>

---

##### `serviceNow`<sup>Required</sup> <a name="serviceNow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNow"></a>

```typescript
public readonly serviceNow: LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference">LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slack"></a>

```typescript
public readonly slack: LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference">LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference</a>

---

##### `tines`<sup>Required</sup> <a name="tines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tines"></a>

```typescript
public readonly tines: LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference">LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference</a>

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhook"></a>

```typescript
public readonly webhook: LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference">LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `jiraInput`<sup>Optional</sup> <a name="jiraInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jiraInput"></a>

```typescript
public readonly jiraInput: IResolvable | LakewatchAlertConfigSecurityAlertExportConfigJira;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigJira">LakewatchAlertConfigSecurityAlertExportConfigJira</a>

---

##### `serviceNowInput`<sup>Optional</sup> <a name="serviceNowInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNowInput"></a>

```typescript
public readonly serviceNowInput: IResolvable | LakewatchAlertConfigSecurityAlertExportConfigServiceNow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow">LakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

---

##### `slackInput`<sup>Optional</sup> <a name="slackInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slackInput"></a>

```typescript
public readonly slackInput: IResolvable | LakewatchAlertConfigSecurityAlertExportConfigSlack;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack">LakewatchAlertConfigSecurityAlertExportConfigSlack</a>

---

##### `tinesInput`<sup>Optional</sup> <a name="tinesInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tinesInput"></a>

```typescript
public readonly tinesInput: IResolvable | LakewatchAlertConfigSecurityAlertExportConfigTines;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines">LakewatchAlertConfigSecurityAlertExportConfigTines</a>

---

##### `webhookInput`<sup>Optional</sup> <a name="webhookInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhookInput"></a>

```typescript
public readonly webhookInput: IResolvable | LakewatchAlertConfigSecurityAlertExportConfigWebhook;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook">LakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchAlertConfigSecurityAlertExportConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfig">LakewatchAlertConfigSecurityAlertExportConfig</a>

---


### LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference <a name="LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

new lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput">clientSecretUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret">clientSecretUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow">LakewatchAlertConfigSecurityAlertExportConfigServiceNow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretUcSecretInput`<sup>Optional</sup> <a name="clientSecretUcSecretInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput"></a>

```typescript
public readonly clientSecretUcSecretInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecretUcSecret`<sup>Required</sup> <a name="clientSecretUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret"></a>

```typescript
public readonly clientSecretUcSecret: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchAlertConfigSecurityAlertExportConfigServiceNow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigServiceNow">LakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

---


### LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference <a name="LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

new lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput">botTokenUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channelInput">channelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecret">botTokenUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack">LakewatchAlertConfigSecurityAlertExportConfigSlack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `botTokenUcSecretInput`<sup>Optional</sup> <a name="botTokenUcSecretInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput"></a>

```typescript
public readonly botTokenUcSecretInput: string;
```

- *Type:* string

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channelInput"></a>

```typescript
public readonly channelInput: string;
```

- *Type:* string

---

##### `botTokenUcSecret`<sup>Required</sup> <a name="botTokenUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecret"></a>

```typescript
public readonly botTokenUcSecret: string;
```

- *Type:* string

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchAlertConfigSecurityAlertExportConfigSlack;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigSlack">LakewatchAlertConfigSecurityAlertExportConfigSlack</a>

---


### LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference <a name="LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

new lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resetExportUpdates">resetExportUpdates</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExportUpdates` <a name="resetExportUpdates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resetExportUpdates"></a>

```typescript
public resetExportUpdates(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdatesInput">exportUpdatesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput">webhookSecretUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUriInput">webhookUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdates">exportUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret">webhookSecretUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUri">webhookUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines">LakewatchAlertConfigSecurityAlertExportConfigTines</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exportUpdatesInput`<sup>Optional</sup> <a name="exportUpdatesInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdatesInput"></a>

```typescript
public readonly exportUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `webhookSecretUcSecretInput`<sup>Optional</sup> <a name="webhookSecretUcSecretInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput"></a>

```typescript
public readonly webhookSecretUcSecretInput: string;
```

- *Type:* string

---

##### `webhookUriInput`<sup>Optional</sup> <a name="webhookUriInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUriInput"></a>

```typescript
public readonly webhookUriInput: string;
```

- *Type:* string

---

##### `exportUpdates`<sup>Required</sup> <a name="exportUpdates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdates"></a>

```typescript
public readonly exportUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `webhookSecretUcSecret`<sup>Required</sup> <a name="webhookSecretUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret"></a>

```typescript
public readonly webhookSecretUcSecret: string;
```

- *Type:* string

---

##### `webhookUri`<sup>Required</sup> <a name="webhookUri" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUri"></a>

```typescript
public readonly webhookUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchAlertConfigSecurityAlertExportConfigTines;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigTines">LakewatchAlertConfigSecurityAlertExportConfigTines</a>

---


### LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference <a name="LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

new lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetExportUpdates">resetExportUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExportUpdates` <a name="resetExportUpdates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetExportUpdates"></a>

```typescript
public resetExportUpdates(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdatesInput">exportUpdatesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdates">exportUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook">LakewatchAlertConfigSecurityAlertExportConfigWebhook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exportUpdatesInput`<sup>Optional</sup> <a name="exportUpdatesInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdatesInput"></a>

```typescript
public readonly exportUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `exportUpdates`<sup>Required</sup> <a name="exportUpdates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdates"></a>

```typescript
public readonly exportUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchAlertConfigSecurityAlertExportConfigWebhook;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSecurityAlertExportConfigWebhook">LakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

---


### LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference <a name="LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

new lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput">apiTokenUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput">defaultIssueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrlInput">instanceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKeyInput">projectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmailInput">userEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecret">apiTokenUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueType">defaultIssueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrl">instanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKey">projectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmail">userEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira">LakewatchAlertConfigSystemAlertExportConfigJira</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiTokenUcSecretInput`<sup>Optional</sup> <a name="apiTokenUcSecretInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput"></a>

```typescript
public readonly apiTokenUcSecretInput: string;
```

- *Type:* string

---

##### `defaultIssueTypeInput`<sup>Optional</sup> <a name="defaultIssueTypeInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput"></a>

```typescript
public readonly defaultIssueTypeInput: string;
```

- *Type:* string

---

##### `instanceUrlInput`<sup>Optional</sup> <a name="instanceUrlInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrlInput"></a>

```typescript
public readonly instanceUrlInput: string;
```

- *Type:* string

---

##### `projectKeyInput`<sup>Optional</sup> <a name="projectKeyInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKeyInput"></a>

```typescript
public readonly projectKeyInput: string;
```

- *Type:* string

---

##### `userEmailInput`<sup>Optional</sup> <a name="userEmailInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmailInput"></a>

```typescript
public readonly userEmailInput: string;
```

- *Type:* string

---

##### `apiTokenUcSecret`<sup>Required</sup> <a name="apiTokenUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecret"></a>

```typescript
public readonly apiTokenUcSecret: string;
```

- *Type:* string

---

##### `defaultIssueType`<sup>Required</sup> <a name="defaultIssueType" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueType"></a>

```typescript
public readonly defaultIssueType: string;
```

- *Type:* string

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrl"></a>

```typescript
public readonly instanceUrl: string;
```

- *Type:* string

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

---

##### `userEmail`<sup>Required</sup> <a name="userEmail" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmail"></a>

```typescript
public readonly userEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchAlertConfigSystemAlertExportConfigJira;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira">LakewatchAlertConfigSystemAlertExportConfigJira</a>

---


### LakewatchAlertConfigSystemAlertExportConfigOutputReference <a name="LakewatchAlertConfigSystemAlertExportConfigOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

new lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira">putJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow">putServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putSlack">putSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines">putTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putWebhook">putWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetJira">resetJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetServiceNow">resetServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetSlack">resetSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetTines">resetTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWebhook">resetWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJira` <a name="putJira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira"></a>

```typescript
public putJira(value: LakewatchAlertConfigSystemAlertExportConfigJira): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira">LakewatchAlertConfigSystemAlertExportConfigJira</a>

---

##### `putServiceNow` <a name="putServiceNow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow"></a>

```typescript
public putServiceNow(value: LakewatchAlertConfigSystemAlertExportConfigServiceNow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow">LakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

---

##### `putSlack` <a name="putSlack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putSlack"></a>

```typescript
public putSlack(value: LakewatchAlertConfigSystemAlertExportConfigSlack): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putSlack.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack">LakewatchAlertConfigSystemAlertExportConfigSlack</a>

---

##### `putTines` <a name="putTines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines"></a>

```typescript
public putTines(value: LakewatchAlertConfigSystemAlertExportConfigTines): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines">LakewatchAlertConfigSystemAlertExportConfigTines</a>

---

##### `putWebhook` <a name="putWebhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putWebhook"></a>

```typescript
public putWebhook(value: LakewatchAlertConfigSystemAlertExportConfigWebhook): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.putWebhook.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook">LakewatchAlertConfigSystemAlertExportConfigWebhook</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetJira` <a name="resetJira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetJira"></a>

```typescript
public resetJira(): void
```

##### `resetServiceNow` <a name="resetServiceNow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetServiceNow"></a>

```typescript
public resetServiceNow(): void
```

##### `resetSlack` <a name="resetSlack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetSlack"></a>

```typescript
public resetSlack(): void
```

##### `resetTines` <a name="resetTines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetTines"></a>

```typescript
public resetTines(): void
```

##### `resetWebhook` <a name="resetWebhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWebhook"></a>

```typescript
public resetWebhook(): void
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jira">jira</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference">LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference">LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference">LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tines">tines</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference">LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhook">webhook</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference">LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jiraInput">jiraInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira">LakewatchAlertConfigSystemAlertExportConfigJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNowInput">serviceNowInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow">LakewatchAlertConfigSystemAlertExportConfigServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slackInput">slackInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack">LakewatchAlertConfigSystemAlertExportConfigSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tinesInput">tinesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines">LakewatchAlertConfigSystemAlertExportConfigTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhookInput">webhookInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook">LakewatchAlertConfigSystemAlertExportConfigWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig">LakewatchAlertConfigSystemAlertExportConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jira`<sup>Required</sup> <a name="jira" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jira"></a>

```typescript
public readonly jira: LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference">LakewatchAlertConfigSystemAlertExportConfigJiraOutputReference</a>

---

##### `serviceNow`<sup>Required</sup> <a name="serviceNow" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNow"></a>

```typescript
public readonly serviceNow: LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference">LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slack"></a>

```typescript
public readonly slack: LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference">LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference</a>

---

##### `tines`<sup>Required</sup> <a name="tines" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tines"></a>

```typescript
public readonly tines: LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference">LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference</a>

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhook"></a>

```typescript
public readonly webhook: LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference">LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `jiraInput`<sup>Optional</sup> <a name="jiraInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jiraInput"></a>

```typescript
public readonly jiraInput: IResolvable | LakewatchAlertConfigSystemAlertExportConfigJira;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigJira">LakewatchAlertConfigSystemAlertExportConfigJira</a>

---

##### `serviceNowInput`<sup>Optional</sup> <a name="serviceNowInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNowInput"></a>

```typescript
public readonly serviceNowInput: IResolvable | LakewatchAlertConfigSystemAlertExportConfigServiceNow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow">LakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

---

##### `slackInput`<sup>Optional</sup> <a name="slackInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slackInput"></a>

```typescript
public readonly slackInput: IResolvable | LakewatchAlertConfigSystemAlertExportConfigSlack;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack">LakewatchAlertConfigSystemAlertExportConfigSlack</a>

---

##### `tinesInput`<sup>Optional</sup> <a name="tinesInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tinesInput"></a>

```typescript
public readonly tinesInput: IResolvable | LakewatchAlertConfigSystemAlertExportConfigTines;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines">LakewatchAlertConfigSystemAlertExportConfigTines</a>

---

##### `webhookInput`<sup>Optional</sup> <a name="webhookInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhookInput"></a>

```typescript
public readonly webhookInput: IResolvable | LakewatchAlertConfigSystemAlertExportConfigWebhook;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook">LakewatchAlertConfigSystemAlertExportConfigWebhook</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchAlertConfigSystemAlertExportConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfig">LakewatchAlertConfigSystemAlertExportConfig</a>

---


### LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference <a name="LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

new lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput">clientSecretUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret">clientSecretUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow">LakewatchAlertConfigSystemAlertExportConfigServiceNow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretUcSecretInput`<sup>Optional</sup> <a name="clientSecretUcSecretInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput"></a>

```typescript
public readonly clientSecretUcSecretInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecretUcSecret`<sup>Required</sup> <a name="clientSecretUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret"></a>

```typescript
public readonly clientSecretUcSecret: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchAlertConfigSystemAlertExportConfigServiceNow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigServiceNow">LakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

---


### LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference <a name="LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

new lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput">botTokenUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channelInput">channelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecret">botTokenUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack">LakewatchAlertConfigSystemAlertExportConfigSlack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `botTokenUcSecretInput`<sup>Optional</sup> <a name="botTokenUcSecretInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput"></a>

```typescript
public readonly botTokenUcSecretInput: string;
```

- *Type:* string

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channelInput"></a>

```typescript
public readonly channelInput: string;
```

- *Type:* string

---

##### `botTokenUcSecret`<sup>Required</sup> <a name="botTokenUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecret"></a>

```typescript
public readonly botTokenUcSecret: string;
```

- *Type:* string

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchAlertConfigSystemAlertExportConfigSlack;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigSlack">LakewatchAlertConfigSystemAlertExportConfigSlack</a>

---


### LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference <a name="LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

new lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resetExportUpdates">resetExportUpdates</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExportUpdates` <a name="resetExportUpdates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resetExportUpdates"></a>

```typescript
public resetExportUpdates(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdatesInput">exportUpdatesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput">webhookSecretUcSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUriInput">webhookUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdates">exportUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret">webhookSecretUcSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUri">webhookUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines">LakewatchAlertConfigSystemAlertExportConfigTines</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exportUpdatesInput`<sup>Optional</sup> <a name="exportUpdatesInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdatesInput"></a>

```typescript
public readonly exportUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `webhookSecretUcSecretInput`<sup>Optional</sup> <a name="webhookSecretUcSecretInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput"></a>

```typescript
public readonly webhookSecretUcSecretInput: string;
```

- *Type:* string

---

##### `webhookUriInput`<sup>Optional</sup> <a name="webhookUriInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUriInput"></a>

```typescript
public readonly webhookUriInput: string;
```

- *Type:* string

---

##### `exportUpdates`<sup>Required</sup> <a name="exportUpdates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdates"></a>

```typescript
public readonly exportUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `webhookSecretUcSecret`<sup>Required</sup> <a name="webhookSecretUcSecret" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret"></a>

```typescript
public readonly webhookSecretUcSecret: string;
```

- *Type:* string

---

##### `webhookUri`<sup>Required</sup> <a name="webhookUri" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUri"></a>

```typescript
public readonly webhookUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchAlertConfigSystemAlertExportConfigTines;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigTines">LakewatchAlertConfigSystemAlertExportConfigTines</a>

---


### LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference <a name="LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

new lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetExportUpdates">resetExportUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExportUpdates` <a name="resetExportUpdates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetExportUpdates"></a>

```typescript
public resetExportUpdates(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdatesInput">exportUpdatesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdates">exportUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook">LakewatchAlertConfigSystemAlertExportConfigWebhook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exportUpdatesInput`<sup>Optional</sup> <a name="exportUpdatesInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdatesInput"></a>

```typescript
public readonly exportUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `exportUpdates`<sup>Required</sup> <a name="exportUpdates" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdates"></a>

```typescript
public readonly exportUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchAlertConfigSystemAlertExportConfigWebhook;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigSystemAlertExportConfigWebhook">LakewatchAlertConfigSystemAlertExportConfigWebhook</a>

---


### LakewatchAlertConfigUpdatedByOutputReference <a name="LakewatchAlertConfigUpdatedByOutputReference" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.Initializer"></a>

```typescript
import { lakewatchAlertConfig } from '@cdktn/provider-databricks'

new lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.resetPrincipalType"></a>

```typescript
public resetPrincipalType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy">LakewatchAlertConfigUpdatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.principalTypeInput"></a>

```typescript
public readonly principalTypeInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LakewatchAlertConfigUpdatedBy;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchAlertConfig.LakewatchAlertConfigUpdatedBy">LakewatchAlertConfigUpdatedBy</a>

---



