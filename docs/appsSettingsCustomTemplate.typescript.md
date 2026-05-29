# `appsSettingsCustomTemplate` Submodule <a name="`appsSettingsCustomTemplate` Submodule" id="@cdktn/provider-databricks.appsSettingsCustomTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsSettingsCustomTemplate <a name="AppsSettingsCustomTemplate" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template databricks_apps_settings_custom_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

new appsSettingsCustomTemplate.AppsSettingsCustomTemplate(scope: Construct, id: string, config: AppsSettingsCustomTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig">AppsSettingsCustomTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig">AppsSettingsCustomTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.putManifest">putManifest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putManifest` <a name="putManifest" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.putManifest"></a>

```typescript
public putManifest(value: AppsSettingsCustomTemplateManifest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.putManifest.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.putProviderConfig"></a>

```typescript
public putProviderConfig(value: AppsSettingsCustomTemplateProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfig">AppsSettingsCustomTemplateProviderConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppsSettingsCustomTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isConstruct"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformElement"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformResource"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppsSettingsCustomTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppsSettingsCustomTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppsSettingsCustomTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppsSettingsCustomTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.manifest">manifest</a></code> | <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference">AppsSettingsCustomTemplateManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference">AppsSettingsCustomTemplateProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitProviderInput">gitProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitRepoInput">gitRepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.manifestInput">manifestInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfig">AppsSettingsCustomTemplateProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitProvider">gitProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitRepo">gitRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.path">path</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.manifest"></a>

```typescript
public readonly manifest: AppsSettingsCustomTemplateManifestOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference">AppsSettingsCustomTemplateManifestOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.providerConfig"></a>

```typescript
public readonly providerConfig: AppsSettingsCustomTemplateProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference">AppsSettingsCustomTemplateProviderConfigOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `gitProviderInput`<sup>Optional</sup> <a name="gitProviderInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitProviderInput"></a>

```typescript
public readonly gitProviderInput: string;
```

- *Type:* string

---

##### `gitRepoInput`<sup>Optional</sup> <a name="gitRepoInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitRepoInput"></a>

```typescript
public readonly gitRepoInput: string;
```

- *Type:* string

---

##### `manifestInput`<sup>Optional</sup> <a name="manifestInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.manifestInput"></a>

```typescript
public readonly manifestInput: IResolvable | AppsSettingsCustomTemplateManifest;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | AppsSettingsCustomTemplateProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfig">AppsSettingsCustomTemplateProviderConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `gitProvider`<sup>Required</sup> <a name="gitProvider" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitProvider"></a>

```typescript
public readonly gitProvider: string;
```

- *Type:* string

---

##### `gitRepo`<sup>Required</sup> <a name="gitRepo" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitRepo"></a>

```typescript
public readonly gitRepo: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsSettingsCustomTemplateConfig <a name="AppsSettingsCustomTemplateConfig" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.Initializer"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

const appsSettingsCustomTemplateConfig: appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.gitProvider">gitProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#git_provider AppsSettingsCustomTemplate#git_provider}. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.gitRepo">gitRepo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#git_repo AppsSettingsCustomTemplate#git_repo}. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.manifest">manifest</a></code> | <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#manifest AppsSettingsCustomTemplate#manifest}. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#path AppsSettingsCustomTemplate#path}. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfig">AppsSettingsCustomTemplateProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#provider_config AppsSettingsCustomTemplate#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `gitProvider`<sup>Required</sup> <a name="gitProvider" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.gitProvider"></a>

```typescript
public readonly gitProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#git_provider AppsSettingsCustomTemplate#git_provider}.

---

##### `gitRepo`<sup>Required</sup> <a name="gitRepo" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.gitRepo"></a>

```typescript
public readonly gitRepo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#git_repo AppsSettingsCustomTemplate#git_repo}.

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.manifest"></a>

```typescript
public readonly manifest: AppsSettingsCustomTemplateManifest;
```

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#manifest AppsSettingsCustomTemplate#manifest}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#path AppsSettingsCustomTemplate#path}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: AppsSettingsCustomTemplateProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfig">AppsSettingsCustomTemplateProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#provider_config AppsSettingsCustomTemplate#provider_config}.

---

### AppsSettingsCustomTemplateManifest <a name="AppsSettingsCustomTemplateManifest" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.Initializer"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

const appsSettingsCustomTemplateManifest: appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.version">version</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#version AppsSettingsCustomTemplate#version}. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.resourceSpecs">resourceSpecs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#resource_specs AppsSettingsCustomTemplate#resource_specs}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#version AppsSettingsCustomTemplate#version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}.

---

##### `resourceSpecs`<sup>Optional</sup> <a name="resourceSpecs" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.resourceSpecs"></a>

```typescript
public readonly resourceSpecs: IResolvable | AppsSettingsCustomTemplateManifestResourceSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#resource_specs AppsSettingsCustomTemplate#resource_specs}.

---

### AppsSettingsCustomTemplateManifestResourceSpecs <a name="AppsSettingsCustomTemplateManifestResourceSpecs" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.Initializer"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

const appsSettingsCustomTemplateManifestResourceSpecs: appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.experimentSpec">experimentSpec</a></code> | <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec">AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#experiment_spec AppsSettingsCustomTemplate#experiment_spec}. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.jobSpec">jobSpec</a></code> | <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec">AppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#job_spec AppsSettingsCustomTemplate#job_spec}. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.secretSpec">secretSpec</a></code> | <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#secret_spec AppsSettingsCustomTemplate#secret_spec}. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.servingEndpointSpec">servingEndpointSpec</a></code> | <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#serving_endpoint_spec AppsSettingsCustomTemplate#serving_endpoint_spec}. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.sqlWarehouseSpec">sqlWarehouseSpec</a></code> | <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#sql_warehouse_spec AppsSettingsCustomTemplate#sql_warehouse_spec}. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.ucSecurableSpec">ucSecurableSpec</a></code> | <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#uc_securable_spec AppsSettingsCustomTemplate#uc_securable_spec}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}.

---

##### `experimentSpec`<sup>Optional</sup> <a name="experimentSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.experimentSpec"></a>

```typescript
public readonly experimentSpec: AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec">AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#experiment_spec AppsSettingsCustomTemplate#experiment_spec}.

---

##### `jobSpec`<sup>Optional</sup> <a name="jobSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.jobSpec"></a>

```typescript
public readonly jobSpec: AppsSettingsCustomTemplateManifestResourceSpecsJobSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec">AppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#job_spec AppsSettingsCustomTemplate#job_spec}.

---

##### `secretSpec`<sup>Optional</sup> <a name="secretSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.secretSpec"></a>

```typescript
public readonly secretSpec: AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#secret_spec AppsSettingsCustomTemplate#secret_spec}.

---

##### `servingEndpointSpec`<sup>Optional</sup> <a name="servingEndpointSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.servingEndpointSpec"></a>

```typescript
public readonly servingEndpointSpec: AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#serving_endpoint_spec AppsSettingsCustomTemplate#serving_endpoint_spec}.

---

##### `sqlWarehouseSpec`<sup>Optional</sup> <a name="sqlWarehouseSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.sqlWarehouseSpec"></a>

```typescript
public readonly sqlWarehouseSpec: AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#sql_warehouse_spec AppsSettingsCustomTemplate#sql_warehouse_spec}.

---

##### `ucSecurableSpec`<sup>Optional</sup> <a name="ucSecurableSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.ucSecurableSpec"></a>

```typescript
public readonly ucSecurableSpec: AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#uc_securable_spec AppsSettingsCustomTemplate#uc_securable_spec}.

---

### AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec <a name="AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec.Initializer"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

const appsSettingsCustomTemplateManifestResourceSpecsExperimentSpec: appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}.

---

### AppsSettingsCustomTemplateManifestResourceSpecsJobSpec <a name="AppsSettingsCustomTemplateManifestResourceSpecsJobSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec.Initializer"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

const appsSettingsCustomTemplateManifestResourceSpecsJobSpec: appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}.

---

### AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec <a name="AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec.Initializer"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

const appsSettingsCustomTemplateManifestResourceSpecsSecretSpec: appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}.

---

### AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec <a name="AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec.Initializer"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

const appsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec: appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}.

---

### AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec <a name="AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec.Initializer"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

const appsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec: appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}.

---

### AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec <a name="AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.Initializer"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

const appsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec: appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.securableType">securableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#securable_type AppsSettingsCustomTemplate#securable_type}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}.

---

##### `securableType`<sup>Required</sup> <a name="securableType" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.securableType"></a>

```typescript
public readonly securableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#securable_type AppsSettingsCustomTemplate#securable_type}.

---

### AppsSettingsCustomTemplateProviderConfig <a name="AppsSettingsCustomTemplateProviderConfig" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfig.Initializer"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

const appsSettingsCustomTemplateProviderConfig: appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#workspace_id AppsSettingsCustomTemplate#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/resources/apps_settings_custom_template#workspace_id AppsSettingsCustomTemplate#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppsSettingsCustomTemplateManifestOutputReference <a name="AppsSettingsCustomTemplateManifestOutputReference" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.Initializer"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

new appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.putResourceSpecs">putResourceSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resetResourceSpecs">resetResourceSpecs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResourceSpecs` <a name="putResourceSpecs" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.putResourceSpecs"></a>

```typescript
public putResourceSpecs(value: IResolvable | AppsSettingsCustomTemplateManifestResourceSpecs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.putResourceSpecs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetResourceSpecs` <a name="resetResourceSpecs" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resetResourceSpecs"></a>

```typescript
public resetResourceSpecs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecs">resourceSpecs</a></code> | <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList">AppsSettingsCustomTemplateManifestResourceSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecsInput">resourceSpecsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.versionInput">versionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceSpecs`<sup>Required</sup> <a name="resourceSpecs" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecs"></a>

```typescript
public readonly resourceSpecs: AppsSettingsCustomTemplateManifestResourceSpecsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList">AppsSettingsCustomTemplateManifestResourceSpecsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceSpecsInput`<sup>Optional</sup> <a name="resourceSpecsInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecsInput"></a>

```typescript
public readonly resourceSpecsInput: IResolvable | AppsSettingsCustomTemplateManifestResourceSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a>[]

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsSettingsCustomTemplateManifest;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a>

---


### AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.Initializer"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

new appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec">AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec">AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec</a>

---


### AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

new appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec">AppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsSettingsCustomTemplateManifestResourceSpecsJobSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec">AppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a>

---


### AppsSettingsCustomTemplateManifestResourceSpecsList <a name="AppsSettingsCustomTemplateManifestResourceSpecsList" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

new appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.get"></a>

```typescript
public get(index: number): AppsSettingsCustomTemplateManifestResourceSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsSettingsCustomTemplateManifestResourceSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a>[]

---


### AppsSettingsCustomTemplateManifestResourceSpecsOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsOutputReference" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

new appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putExperimentSpec">putExperimentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putJobSpec">putJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSecretSpec">putSecretSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putServingEndpointSpec">putServingEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSqlWarehouseSpec">putSqlWarehouseSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putUcSecurableSpec">putUcSecurableSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetExperimentSpec">resetExperimentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetJobSpec">resetJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSecretSpec">resetSecretSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetServingEndpointSpec">resetServingEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSqlWarehouseSpec">resetSqlWarehouseSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetUcSecurableSpec">resetUcSecurableSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExperimentSpec` <a name="putExperimentSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putExperimentSpec"></a>

```typescript
public putExperimentSpec(value: AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putExperimentSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec">AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec</a>

---

##### `putJobSpec` <a name="putJobSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putJobSpec"></a>

```typescript
public putJobSpec(value: AppsSettingsCustomTemplateManifestResourceSpecsJobSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putJobSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec">AppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a>

---

##### `putSecretSpec` <a name="putSecretSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSecretSpec"></a>

```typescript
public putSecretSpec(value: AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSecretSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a>

---

##### `putServingEndpointSpec` <a name="putServingEndpointSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putServingEndpointSpec"></a>

```typescript
public putServingEndpointSpec(value: AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putServingEndpointSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a>

---

##### `putSqlWarehouseSpec` <a name="putSqlWarehouseSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSqlWarehouseSpec"></a>

```typescript
public putSqlWarehouseSpec(value: AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSqlWarehouseSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a>

---

##### `putUcSecurableSpec` <a name="putUcSecurableSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putUcSecurableSpec"></a>

```typescript
public putUcSecurableSpec(value: AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putUcSecurableSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExperimentSpec` <a name="resetExperimentSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetExperimentSpec"></a>

```typescript
public resetExperimentSpec(): void
```

##### `resetJobSpec` <a name="resetJobSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetJobSpec"></a>

```typescript
public resetJobSpec(): void
```

##### `resetSecretSpec` <a name="resetSecretSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSecretSpec"></a>

```typescript
public resetSecretSpec(): void
```

##### `resetServingEndpointSpec` <a name="resetServingEndpointSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetServingEndpointSpec"></a>

```typescript
public resetServingEndpointSpec(): void
```

##### `resetSqlWarehouseSpec` <a name="resetSqlWarehouseSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSqlWarehouseSpec"></a>

```typescript
public resetSqlWarehouseSpec(): void
```

##### `resetUcSecurableSpec` <a name="resetUcSecurableSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetUcSecurableSpec"></a>

```typescript
public resetUcSecurableSpec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.experimentSpec">experimentSpec</a></code> | <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpec">jobSpec</a></code> | <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpec">secretSpec</a></code> | <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpec">servingEndpointSpec</a></code> | <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpec">sqlWarehouseSpec</a></code> | <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpec">ucSecurableSpec</a></code> | <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.experimentSpecInput">experimentSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec">AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpecInput">jobSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec">AppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpecInput">secretSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpecInput">servingEndpointSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpecInput">sqlWarehouseSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpecInput">ucSecurableSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `experimentSpec`<sup>Required</sup> <a name="experimentSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.experimentSpec"></a>

```typescript
public readonly experimentSpec: AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference</a>

---

##### `jobSpec`<sup>Required</sup> <a name="jobSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpec"></a>

```typescript
public readonly jobSpec: AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference</a>

---

##### `secretSpec`<sup>Required</sup> <a name="secretSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpec"></a>

```typescript
public readonly secretSpec: AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference</a>

---

##### `servingEndpointSpec`<sup>Required</sup> <a name="servingEndpointSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpec"></a>

```typescript
public readonly servingEndpointSpec: AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference</a>

---

##### `sqlWarehouseSpec`<sup>Required</sup> <a name="sqlWarehouseSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpec"></a>

```typescript
public readonly sqlWarehouseSpec: AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference</a>

---

##### `ucSecurableSpec`<sup>Required</sup> <a name="ucSecurableSpec" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpec"></a>

```typescript
public readonly ucSecurableSpec: AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `experimentSpecInput`<sup>Optional</sup> <a name="experimentSpecInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.experimentSpecInput"></a>

```typescript
public readonly experimentSpecInput: IResolvable | AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec">AppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec</a>

---

##### `jobSpecInput`<sup>Optional</sup> <a name="jobSpecInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpecInput"></a>

```typescript
public readonly jobSpecInput: IResolvable | AppsSettingsCustomTemplateManifestResourceSpecsJobSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec">AppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `secretSpecInput`<sup>Optional</sup> <a name="secretSpecInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpecInput"></a>

```typescript
public readonly secretSpecInput: IResolvable | AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a>

---

##### `servingEndpointSpecInput`<sup>Optional</sup> <a name="servingEndpointSpecInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpecInput"></a>

```typescript
public readonly servingEndpointSpecInput: IResolvable | AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a>

---

##### `sqlWarehouseSpecInput`<sup>Optional</sup> <a name="sqlWarehouseSpecInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpecInput"></a>

```typescript
public readonly sqlWarehouseSpecInput: IResolvable | AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a>

---

##### `ucSecurableSpecInput`<sup>Optional</sup> <a name="ucSecurableSpecInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpecInput"></a>

```typescript
public readonly ucSecurableSpecInput: IResolvable | AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsSettingsCustomTemplateManifestResourceSpecs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs">AppsSettingsCustomTemplateManifestResourceSpecs</a>

---


### AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

new appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a>

---


### AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

new appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a>

---


### AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

new appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a>

---


### AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

new appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableTypeInput">securableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableType">securableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `securableTypeInput`<sup>Optional</sup> <a name="securableTypeInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableTypeInput"></a>

```typescript
public readonly securableTypeInput: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `securableType`<sup>Required</sup> <a name="securableType" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableType"></a>

```typescript
public readonly securableType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a>

---


### AppsSettingsCustomTemplateProviderConfigOutputReference <a name="AppsSettingsCustomTemplateProviderConfigOutputReference" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.Initializer"></a>

```typescript
import { appsSettingsCustomTemplate } from '@cdktn/provider-databricks'

new appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfig">AppsSettingsCustomTemplateProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppsSettingsCustomTemplateProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateProviderConfig">AppsSettingsCustomTemplateProviderConfig</a>

---



