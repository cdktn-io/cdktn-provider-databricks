# `lakewatchRuleConfig` Submodule <a name="`lakewatchRuleConfig` Submodule" id="@cdktn/provider-databricks.lakewatchRuleConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakewatchRuleConfigA <a name="LakewatchRuleConfigA" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config databricks_lakewatch_rule_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer"></a>

```typescript
import { lakewatchRuleConfig } from '@cdktn/provider-databricks'

new lakewatchRuleConfig.LakewatchRuleConfigA(scope: Construct, id: string, config: LakewatchRuleConfigAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig">LakewatchRuleConfigAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig">LakewatchRuleConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.putDefaultSchedule">putDefaultSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.resetDefaultFolder">resetDefaultFolder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.resetDefaultSchedule">resetDefaultSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.resetDefaultSignalCollationWindow">resetDefaultSignalCollationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.resetDetectionCategories">resetDetectionCategories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultSchedule` <a name="putDefaultSchedule" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.putDefaultSchedule"></a>

```typescript
public putDefaultSchedule(value: LakewatchRuleConfigDefaultSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.putDefaultSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule">LakewatchRuleConfigDefaultSchedule</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.putProviderConfig"></a>

```typescript
public putProviderConfig(value: LakewatchRuleConfigProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfig">LakewatchRuleConfigProviderConfig</a>

---

##### `resetDefaultFolder` <a name="resetDefaultFolder" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.resetDefaultFolder"></a>

```typescript
public resetDefaultFolder(): void
```

##### `resetDefaultSchedule` <a name="resetDefaultSchedule" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.resetDefaultSchedule"></a>

```typescript
public resetDefaultSchedule(): void
```

##### `resetDefaultSignalCollationWindow` <a name="resetDefaultSignalCollationWindow" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.resetDefaultSignalCollationWindow"></a>

```typescript
public resetDefaultSignalCollationWindow(): void
```

##### `resetDetectionCategories` <a name="resetDetectionCategories" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.resetDetectionCategories"></a>

```typescript
public resetDetectionCategories(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LakewatchRuleConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.isConstruct"></a>

```typescript
import { lakewatchRuleConfig } from '@cdktn/provider-databricks'

lakewatchRuleConfig.LakewatchRuleConfigA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.isTerraformElement"></a>

```typescript
import { lakewatchRuleConfig } from '@cdktn/provider-databricks'

lakewatchRuleConfig.LakewatchRuleConfigA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.isTerraformResource"></a>

```typescript
import { lakewatchRuleConfig } from '@cdktn/provider-databricks'

lakewatchRuleConfig.LakewatchRuleConfigA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.generateConfigForImport"></a>

```typescript
import { lakewatchRuleConfig } from '@cdktn/provider-databricks'

lakewatchRuleConfig.LakewatchRuleConfigA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LakewatchRuleConfigA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LakewatchRuleConfigA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LakewatchRuleConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LakewatchRuleConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.defaultSchedule">defaultSchedule</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference">LakewatchRuleConfigDefaultScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.effectiveDefaultFolder">effectiveDefaultFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.effectiveDetectionCategories">effectiveDetectionCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference">LakewatchRuleConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.updatedBy">updatedBy</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference">LakewatchRuleConfigUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.defaultFolderInput">defaultFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.defaultScheduleInput">defaultScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule">LakewatchRuleConfigDefaultSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.defaultSignalCollationWindowInput">defaultSignalCollationWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.detectionCategoriesInput">detectionCategoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfig">LakewatchRuleConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.defaultFolder">defaultFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.defaultSignalCollationWindow">defaultSignalCollationWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.detectionCategories">detectionCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `defaultSchedule`<sup>Required</sup> <a name="defaultSchedule" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.defaultSchedule"></a>

```typescript
public readonly defaultSchedule: LakewatchRuleConfigDefaultScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference">LakewatchRuleConfigDefaultScheduleOutputReference</a>

---

##### `effectiveDefaultFolder`<sup>Required</sup> <a name="effectiveDefaultFolder" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.effectiveDefaultFolder"></a>

```typescript
public readonly effectiveDefaultFolder: string;
```

- *Type:* string

---

##### `effectiveDetectionCategories`<sup>Required</sup> <a name="effectiveDetectionCategories" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.effectiveDetectionCategories"></a>

```typescript
public readonly effectiveDetectionCategories: string[];
```

- *Type:* string[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.providerConfig"></a>

```typescript
public readonly providerConfig: LakewatchRuleConfigProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference">LakewatchRuleConfigProviderConfigOutputReference</a>

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.updatedBy"></a>

```typescript
public readonly updatedBy: LakewatchRuleConfigUpdatedByOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference">LakewatchRuleConfigUpdatedByOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `defaultFolderInput`<sup>Optional</sup> <a name="defaultFolderInput" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.defaultFolderInput"></a>

```typescript
public readonly defaultFolderInput: string;
```

- *Type:* string

---

##### `defaultScheduleInput`<sup>Optional</sup> <a name="defaultScheduleInput" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.defaultScheduleInput"></a>

```typescript
public readonly defaultScheduleInput: IResolvable | LakewatchRuleConfigDefaultSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule">LakewatchRuleConfigDefaultSchedule</a>

---

##### `defaultSignalCollationWindowInput`<sup>Optional</sup> <a name="defaultSignalCollationWindowInput" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.defaultSignalCollationWindowInput"></a>

```typescript
public readonly defaultSignalCollationWindowInput: string;
```

- *Type:* string

---

##### `detectionCategoriesInput`<sup>Optional</sup> <a name="detectionCategoriesInput" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.detectionCategoriesInput"></a>

```typescript
public readonly detectionCategoriesInput: string[];
```

- *Type:* string[]

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | LakewatchRuleConfigProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfig">LakewatchRuleConfigProviderConfig</a>

---

##### `defaultFolder`<sup>Required</sup> <a name="defaultFolder" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.defaultFolder"></a>

```typescript
public readonly defaultFolder: string;
```

- *Type:* string

---

##### `defaultSignalCollationWindow`<sup>Required</sup> <a name="defaultSignalCollationWindow" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.defaultSignalCollationWindow"></a>

```typescript
public readonly defaultSignalCollationWindow: string;
```

- *Type:* string

---

##### `detectionCategories`<sup>Required</sup> <a name="detectionCategories" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.detectionCategories"></a>

```typescript
public readonly detectionCategories: string[];
```

- *Type:* string[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakewatchRuleConfigAConfig <a name="LakewatchRuleConfigAConfig" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.Initializer"></a>

```typescript
import { lakewatchRuleConfig } from '@cdktn/provider-databricks'

const lakewatchRuleConfigAConfig: lakewatchRuleConfig.LakewatchRuleConfigAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#parent LakewatchRuleConfigA#parent}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.defaultFolder">defaultFolder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#default_folder LakewatchRuleConfigA#default_folder}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.defaultSchedule">defaultSchedule</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule">LakewatchRuleConfigDefaultSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#default_schedule LakewatchRuleConfigA#default_schedule}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.defaultSignalCollationWindow">defaultSignalCollationWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#default_signal_collation_window LakewatchRuleConfigA#default_signal_collation_window}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.detectionCategories">detectionCategories</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#detection_categories LakewatchRuleConfigA#detection_categories}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfig">LakewatchRuleConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#provider_config LakewatchRuleConfigA#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#parent LakewatchRuleConfigA#parent}.

---

##### `defaultFolder`<sup>Optional</sup> <a name="defaultFolder" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.defaultFolder"></a>

```typescript
public readonly defaultFolder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#default_folder LakewatchRuleConfigA#default_folder}.

---

##### `defaultSchedule`<sup>Optional</sup> <a name="defaultSchedule" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.defaultSchedule"></a>

```typescript
public readonly defaultSchedule: LakewatchRuleConfigDefaultSchedule;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule">LakewatchRuleConfigDefaultSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#default_schedule LakewatchRuleConfigA#default_schedule}.

---

##### `defaultSignalCollationWindow`<sup>Optional</sup> <a name="defaultSignalCollationWindow" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.defaultSignalCollationWindow"></a>

```typescript
public readonly defaultSignalCollationWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#default_signal_collation_window LakewatchRuleConfigA#default_signal_collation_window}.

---

##### `detectionCategories`<sup>Optional</sup> <a name="detectionCategories" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.detectionCategories"></a>

```typescript
public readonly detectionCategories: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#detection_categories LakewatchRuleConfigA#detection_categories}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigAConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: LakewatchRuleConfigProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfig">LakewatchRuleConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#provider_config LakewatchRuleConfigA#provider_config}.

---

### LakewatchRuleConfigDefaultSchedule <a name="LakewatchRuleConfigDefaultSchedule" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule.Initializer"></a>

```typescript
import { lakewatchRuleConfig } from '@cdktn/provider-databricks'

const lakewatchRuleConfigDefaultSchedule: lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule.property.atLeastEvery">atLeastEvery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#at_least_every LakewatchRuleConfigA#at_least_every}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule.property.continuous">continuous</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#continuous LakewatchRuleConfigA#continuous}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule.property.cronExpression">cronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#cron_expression LakewatchRuleConfigA#cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#enabled LakewatchRuleConfigA#enabled}. |

---

##### `atLeastEvery`<sup>Optional</sup> <a name="atLeastEvery" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule.property.atLeastEvery"></a>

```typescript
public readonly atLeastEvery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#at_least_every LakewatchRuleConfigA#at_least_every}.

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule.property.continuous"></a>

```typescript
public readonly continuous: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#continuous LakewatchRuleConfigA#continuous}.

---

##### `cronExpression`<sup>Optional</sup> <a name="cronExpression" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#cron_expression LakewatchRuleConfigA#cron_expression}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#enabled LakewatchRuleConfigA#enabled}.

---

### LakewatchRuleConfigProviderConfig <a name="LakewatchRuleConfigProviderConfig" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfig.Initializer"></a>

```typescript
import { lakewatchRuleConfig } from '@cdktn/provider-databricks'

const lakewatchRuleConfigProviderConfig: lakewatchRuleConfig.LakewatchRuleConfigProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#workspace_id LakewatchRuleConfigA#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#workspace_id LakewatchRuleConfigA#workspace_id}.

---

### LakewatchRuleConfigUpdatedBy <a name="LakewatchRuleConfigUpdatedBy" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy.Initializer"></a>

```typescript
import { lakewatchRuleConfig } from '@cdktn/provider-databricks'

const lakewatchRuleConfigUpdatedBy: lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#display_name LakewatchRuleConfigA#display_name}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#email LakewatchRuleConfigA#email}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#id LakewatchRuleConfigA#id}. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy.property.principalType">principalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#principal_type LakewatchRuleConfigA#principal_type}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#display_name LakewatchRuleConfigA#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#email LakewatchRuleConfigA#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#id LakewatchRuleConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principalType`<sup>Optional</sup> <a name="principalType" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/resources/lakewatch_rule_config#principal_type LakewatchRuleConfigA#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakewatchRuleConfigDefaultScheduleOutputReference <a name="LakewatchRuleConfigDefaultScheduleOutputReference" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.Initializer"></a>

```typescript
import { lakewatchRuleConfig } from '@cdktn/provider-databricks'

new lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.resetAtLeastEvery">resetAtLeastEvery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.resetContinuous">resetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.resetCronExpression">resetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAtLeastEvery` <a name="resetAtLeastEvery" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.resetAtLeastEvery"></a>

```typescript
public resetAtLeastEvery(): void
```

##### `resetContinuous` <a name="resetContinuous" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.resetContinuous"></a>

```typescript
public resetContinuous(): void
```

##### `resetCronExpression` <a name="resetCronExpression" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.resetCronExpression"></a>

```typescript
public resetCronExpression(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.atLeastEveryInput">atLeastEveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.continuousInput">continuousInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.atLeastEvery">atLeastEvery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.continuous">continuous</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.cronExpression">cronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule">LakewatchRuleConfigDefaultSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `atLeastEveryInput`<sup>Optional</sup> <a name="atLeastEveryInput" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.atLeastEveryInput"></a>

```typescript
public readonly atLeastEveryInput: string;
```

- *Type:* string

---

##### `continuousInput`<sup>Optional</sup> <a name="continuousInput" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.continuousInput"></a>

```typescript
public readonly continuousInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.cronExpressionInput"></a>

```typescript
public readonly cronExpressionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `atLeastEvery`<sup>Required</sup> <a name="atLeastEvery" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.atLeastEvery"></a>

```typescript
public readonly atLeastEvery: string;
```

- *Type:* string

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.continuous"></a>

```typescript
public readonly continuous: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchRuleConfigDefaultSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigDefaultSchedule">LakewatchRuleConfigDefaultSchedule</a>

---


### LakewatchRuleConfigProviderConfigOutputReference <a name="LakewatchRuleConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.Initializer"></a>

```typescript
import { lakewatchRuleConfig } from '@cdktn/provider-databricks'

new lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfig">LakewatchRuleConfigProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakewatchRuleConfigProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigProviderConfig">LakewatchRuleConfigProviderConfig</a>

---


### LakewatchRuleConfigUpdatedByOutputReference <a name="LakewatchRuleConfigUpdatedByOutputReference" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.Initializer"></a>

```typescript
import { lakewatchRuleConfig } from '@cdktn/provider-databricks'

new lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.resetPrincipalType">resetPrincipalType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrincipalType` <a name="resetPrincipalType" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.resetPrincipalType"></a>

```typescript
public resetPrincipalType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy">LakewatchRuleConfigUpdatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.principalTypeInput"></a>

```typescript
public readonly principalTypeInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LakewatchRuleConfigUpdatedBy;
```

- *Type:* <a href="#@cdktn/provider-databricks.lakewatchRuleConfig.LakewatchRuleConfigUpdatedBy">LakewatchRuleConfigUpdatedBy</a>

---



