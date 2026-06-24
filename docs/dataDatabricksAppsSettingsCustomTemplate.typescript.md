# `dataDatabricksAppsSettingsCustomTemplate` Submodule <a name="`dataDatabricksAppsSettingsCustomTemplate` Submodule" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAppsSettingsCustomTemplate <a name="DataDatabricksAppsSettingsCustomTemplate" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template databricks_apps_settings_custom_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.Initializer"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

new dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate(scope: Construct, id: string, config: DataDatabricksAppsSettingsCustomTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig">DataDatabricksAppsSettingsCustomTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig">DataDatabricksAppsSettingsCustomTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksAppsSettingsCustomTemplateProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfig">DataDatabricksAppsSettingsCustomTemplateProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAppsSettingsCustomTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isConstruct"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isTerraformElement"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isTerraformDataSource"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.generateConfigForImport"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksAppsSettingsCustomTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAppsSettingsCustomTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAppsSettingsCustomTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAppsSettingsCustomTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.gitProvider">gitProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.gitRepo">gitRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.manifest">manifest</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference">DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfig">DataDatabricksAppsSettingsCustomTemplateProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `gitProvider`<sup>Required</sup> <a name="gitProvider" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.gitProvider"></a>

```typescript
public readonly gitProvider: string;
```

- *Type:* string

---

##### `gitRepo`<sup>Required</sup> <a name="gitRepo" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.gitRepo"></a>

```typescript
public readonly gitRepo: string;
```

- *Type:* string

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.manifest"></a>

```typescript
public readonly manifest: DataDatabricksAppsSettingsCustomTemplateManifestOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestOutputReference</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference">DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksAppsSettingsCustomTemplateProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfig">DataDatabricksAppsSettingsCustomTemplateProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAppsSettingsCustomTemplateConfig <a name="DataDatabricksAppsSettingsCustomTemplateConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.Initializer"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

const dataDatabricksAppsSettingsCustomTemplateConfig: dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#name DataDatabricksAppsSettingsCustomTemplate#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfig">DataDatabricksAppsSettingsCustomTemplateProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#provider_config DataDatabricksAppsSettingsCustomTemplate#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#name DataDatabricksAppsSettingsCustomTemplate#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAppsSettingsCustomTemplateProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfig">DataDatabricksAppsSettingsCustomTemplateProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#provider_config DataDatabricksAppsSettingsCustomTemplate#provider_config}.

---

### DataDatabricksAppsSettingsCustomTemplateManifest <a name="DataDatabricksAppsSettingsCustomTemplateManifest" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.Initializer"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

const dataDatabricksAppsSettingsCustomTemplateManifest: dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#name DataDatabricksAppsSettingsCustomTemplate#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.property.version">version</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#version DataDatabricksAppsSettingsCustomTemplate#version}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#description DataDatabricksAppsSettingsCustomTemplate#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.property.resourceSpecs">resourceSpecs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#resource_specs DataDatabricksAppsSettingsCustomTemplate#resource_specs}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#name DataDatabricksAppsSettingsCustomTemplate#name}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#version DataDatabricksAppsSettingsCustomTemplate#version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#description DataDatabricksAppsSettingsCustomTemplate#description}.

---

##### `resourceSpecs`<sup>Optional</sup> <a name="resourceSpecs" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest.property.resourceSpecs"></a>

```typescript
public readonly resourceSpecs: IResolvable | DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#resource_specs DataDatabricksAppsSettingsCustomTemplate#resource_specs}.

---

### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.Initializer"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

const dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs: dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#name DataDatabricksAppsSettingsCustomTemplate#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#description DataDatabricksAppsSettingsCustomTemplate#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.experimentSpec">experimentSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#experiment_spec DataDatabricksAppsSettingsCustomTemplate#experiment_spec}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.jobSpec">jobSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#job_spec DataDatabricksAppsSettingsCustomTemplate#job_spec}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.secretSpec">secretSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#secret_spec DataDatabricksAppsSettingsCustomTemplate#secret_spec}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.servingEndpointSpec">servingEndpointSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#serving_endpoint_spec DataDatabricksAppsSettingsCustomTemplate#serving_endpoint_spec}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.sqlWarehouseSpec">sqlWarehouseSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#sql_warehouse_spec DataDatabricksAppsSettingsCustomTemplate#sql_warehouse_spec}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.ucSecurableSpec">ucSecurableSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#uc_securable_spec DataDatabricksAppsSettingsCustomTemplate#uc_securable_spec}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#name DataDatabricksAppsSettingsCustomTemplate#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#description DataDatabricksAppsSettingsCustomTemplate#description}.

---

##### `experimentSpec`<sup>Optional</sup> <a name="experimentSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.experimentSpec"></a>

```typescript
public readonly experimentSpec: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#experiment_spec DataDatabricksAppsSettingsCustomTemplate#experiment_spec}.

---

##### `jobSpec`<sup>Optional</sup> <a name="jobSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.jobSpec"></a>

```typescript
public readonly jobSpec: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#job_spec DataDatabricksAppsSettingsCustomTemplate#job_spec}.

---

##### `secretSpec`<sup>Optional</sup> <a name="secretSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.secretSpec"></a>

```typescript
public readonly secretSpec: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#secret_spec DataDatabricksAppsSettingsCustomTemplate#secret_spec}.

---

##### `servingEndpointSpec`<sup>Optional</sup> <a name="servingEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.servingEndpointSpec"></a>

```typescript
public readonly servingEndpointSpec: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#serving_endpoint_spec DataDatabricksAppsSettingsCustomTemplate#serving_endpoint_spec}.

---

##### `sqlWarehouseSpec`<sup>Optional</sup> <a name="sqlWarehouseSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.sqlWarehouseSpec"></a>

```typescript
public readonly sqlWarehouseSpec: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#sql_warehouse_spec DataDatabricksAppsSettingsCustomTemplate#sql_warehouse_spec}.

---

##### `ucSecurableSpec`<sup>Optional</sup> <a name="ucSecurableSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs.property.ucSecurableSpec"></a>

```typescript
public readonly ucSecurableSpec: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#uc_securable_spec DataDatabricksAppsSettingsCustomTemplate#uc_securable_spec}.

---

### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec.Initializer"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

const dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec: dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}.

---

### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec.Initializer"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

const dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec: dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}.

---

### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec.Initializer"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

const dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec: dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}.

---

### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec.Initializer"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

const dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec: dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}.

---

### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec.Initializer"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

const dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec: dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}.

---

### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.Initializer"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

const dataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec: dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.securableType">securableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#securable_type DataDatabricksAppsSettingsCustomTemplate#securable_type}. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#permission DataDatabricksAppsSettingsCustomTemplate#permission}.

---

##### `securableType`<sup>Required</sup> <a name="securableType" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.securableType"></a>

```typescript
public readonly securableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#securable_type DataDatabricksAppsSettingsCustomTemplate#securable_type}.

---

### DataDatabricksAppsSettingsCustomTemplateProviderConfig <a name="DataDatabricksAppsSettingsCustomTemplateProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

const dataDatabricksAppsSettingsCustomTemplateProviderConfig: dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#workspace_id DataDatabricksAppsSettingsCustomTemplate#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/apps_settings_custom_template#workspace_id DataDatabricksAppsSettingsCustomTemplate#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAppsSettingsCustomTemplateManifestOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateManifestOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

new dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.putResourceSpecs">putResourceSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.resetResourceSpecs">resetResourceSpecs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResourceSpecs` <a name="putResourceSpecs" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.putResourceSpecs"></a>

```typescript
public putResourceSpecs(value: IResolvable | DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.putResourceSpecs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetResourceSpecs` <a name="resetResourceSpecs" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.resetResourceSpecs"></a>

```typescript
public resetResourceSpecs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecs">resourceSpecs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecsInput">resourceSpecsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.versionInput">versionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest">DataDatabricksAppsSettingsCustomTemplateManifest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceSpecs`<sup>Required</sup> <a name="resourceSpecs" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecs"></a>

```typescript
public readonly resourceSpecs: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceSpecsInput`<sup>Optional</sup> <a name="resourceSpecsInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecsInput"></a>

```typescript
public readonly resourceSpecsInput: IResolvable | DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs</a>[]

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAppsSettingsCustomTemplateManifest;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifest">DataDatabricksAppsSettingsCustomTemplateManifest</a>

---


### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

new dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec</a>

---


### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

new dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a>

---


### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.Initializer"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

new dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.get"></a>

```typescript
public get(index: number): DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs</a>[]

---


### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

new dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putExperimentSpec">putExperimentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putJobSpec">putJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSecretSpec">putSecretSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putServingEndpointSpec">putServingEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSqlWarehouseSpec">putSqlWarehouseSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putUcSecurableSpec">putUcSecurableSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetExperimentSpec">resetExperimentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetJobSpec">resetJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSecretSpec">resetSecretSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetServingEndpointSpec">resetServingEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSqlWarehouseSpec">resetSqlWarehouseSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetUcSecurableSpec">resetUcSecurableSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExperimentSpec` <a name="putExperimentSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putExperimentSpec"></a>

```typescript
public putExperimentSpec(value: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putExperimentSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec</a>

---

##### `putJobSpec` <a name="putJobSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putJobSpec"></a>

```typescript
public putJobSpec(value: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putJobSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a>

---

##### `putSecretSpec` <a name="putSecretSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSecretSpec"></a>

```typescript
public putSecretSpec(value: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSecretSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a>

---

##### `putServingEndpointSpec` <a name="putServingEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putServingEndpointSpec"></a>

```typescript
public putServingEndpointSpec(value: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putServingEndpointSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a>

---

##### `putSqlWarehouseSpec` <a name="putSqlWarehouseSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSqlWarehouseSpec"></a>

```typescript
public putSqlWarehouseSpec(value: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSqlWarehouseSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a>

---

##### `putUcSecurableSpec` <a name="putUcSecurableSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putUcSecurableSpec"></a>

```typescript
public putUcSecurableSpec(value: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putUcSecurableSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExperimentSpec` <a name="resetExperimentSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetExperimentSpec"></a>

```typescript
public resetExperimentSpec(): void
```

##### `resetJobSpec` <a name="resetJobSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetJobSpec"></a>

```typescript
public resetJobSpec(): void
```

##### `resetSecretSpec` <a name="resetSecretSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSecretSpec"></a>

```typescript
public resetSecretSpec(): void
```

##### `resetServingEndpointSpec` <a name="resetServingEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetServingEndpointSpec"></a>

```typescript
public resetServingEndpointSpec(): void
```

##### `resetSqlWarehouseSpec` <a name="resetSqlWarehouseSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSqlWarehouseSpec"></a>

```typescript
public resetSqlWarehouseSpec(): void
```

##### `resetUcSecurableSpec` <a name="resetUcSecurableSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetUcSecurableSpec"></a>

```typescript
public resetUcSecurableSpec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.experimentSpec">experimentSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpec">jobSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpec">secretSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpec">servingEndpointSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpec">sqlWarehouseSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpec">ucSecurableSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.experimentSpecInput">experimentSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpecInput">jobSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpecInput">secretSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpecInput">servingEndpointSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpecInput">sqlWarehouseSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpecInput">ucSecurableSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `experimentSpec`<sup>Required</sup> <a name="experimentSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.experimentSpec"></a>

```typescript
public readonly experimentSpec: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpecOutputReference</a>

---

##### `jobSpec`<sup>Required</sup> <a name="jobSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpec"></a>

```typescript
public readonly jobSpec: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference</a>

---

##### `secretSpec`<sup>Required</sup> <a name="secretSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpec"></a>

```typescript
public readonly secretSpec: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference</a>

---

##### `servingEndpointSpec`<sup>Required</sup> <a name="servingEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpec"></a>

```typescript
public readonly servingEndpointSpec: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference</a>

---

##### `sqlWarehouseSpec`<sup>Required</sup> <a name="sqlWarehouseSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpec"></a>

```typescript
public readonly sqlWarehouseSpec: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference</a>

---

##### `ucSecurableSpec`<sup>Required</sup> <a name="ucSecurableSpec" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpec"></a>

```typescript
public readonly ucSecurableSpec: DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `experimentSpecInput`<sup>Optional</sup> <a name="experimentSpecInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.experimentSpecInput"></a>

```typescript
public readonly experimentSpecInput: IResolvable | DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsExperimentSpec</a>

---

##### `jobSpecInput`<sup>Optional</sup> <a name="jobSpecInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpecInput"></a>

```typescript
public readonly jobSpecInput: IResolvable | DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `secretSpecInput`<sup>Optional</sup> <a name="secretSpecInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpecInput"></a>

```typescript
public readonly secretSpecInput: IResolvable | DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a>

---

##### `servingEndpointSpecInput`<sup>Optional</sup> <a name="servingEndpointSpecInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpecInput"></a>

```typescript
public readonly servingEndpointSpecInput: IResolvable | DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a>

---

##### `sqlWarehouseSpecInput`<sup>Optional</sup> <a name="sqlWarehouseSpecInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpecInput"></a>

```typescript
public readonly sqlWarehouseSpecInput: IResolvable | DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a>

---

##### `ucSecurableSpecInput`<sup>Optional</sup> <a name="ucSecurableSpecInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpecInput"></a>

```typescript
public readonly ucSecurableSpecInput: IResolvable | DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecs</a>

---


### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

new dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a>

---


### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

new dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a>

---


### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

new dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a>

---


### DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

new dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableTypeInput">securableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableType">securableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `securableTypeInput`<sup>Optional</sup> <a name="securableTypeInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableTypeInput"></a>

```typescript
public readonly securableTypeInput: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `securableType`<sup>Required</sup> <a name="securableType" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableType"></a>

```typescript
public readonly securableType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">DataDatabricksAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a>

---


### DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference <a name="DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAppsSettingsCustomTemplate } from '@cdktn/provider-databricks'

new dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfig">DataDatabricksAppsSettingsCustomTemplateProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAppsSettingsCustomTemplateProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAppsSettingsCustomTemplate.DataDatabricksAppsSettingsCustomTemplateProviderConfig">DataDatabricksAppsSettingsCustomTemplateProviderConfig</a>

---



